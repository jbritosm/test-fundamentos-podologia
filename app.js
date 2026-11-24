"use strict";

// =====================================================================
// Configuración
// =====================================================================
const LIMITE_EXAMEN_MS = 90 * 60 * 1000; // 1 h 30 min
const OPCIONES_NUM = [10, 20, 30, 50, 0]; // 0 = todas
const LETRAS = ["A", "B", "C", "D", "E", "F"];

// =====================================================================
// Utilidades
// =====================================================================
const $ = (sel) => document.querySelector(sel);
const el = (tag, attrs = {}, ...hijos) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") n.className = v;
    else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
    else n.setAttribute(k, v);
  }
  for (const h of hijos) if (h != null) n.append(h);
  return n;
};

function hash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
  return "q" + (h >>> 0).toString(36);
}

function barajar(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatoTiempo(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const ss = s % 60;
  const p = (n) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${p(m)}:${p(ss)}` : `${p(m)}:${p(ss)}`;
}

const store = {
  get(k, def) { try { return JSON.parse(localStorage.getItem(k)) ?? def; } catch { return def; } },
  set(k, v) { localStorage.setItem(k, JSON.stringify(v)); }
};

// Añade id único a cada pregunta del banco
const BANCO = PREGUNTAS.map((p) => ({ ...p, id: hash(p.t + "|" + p.q) }));
const NOMBRE_TEMA = Object.fromEntries(TEMAS.map((t) => [t.id, t.nombre]));

// =====================================================================
// Tema claro / oscuro
// =====================================================================
function pintarBotonTema() {
  const oscuro = document.documentElement.dataset.tema === "oscuro";
  $("#btn-tema").textContent = oscuro ? "☀️" : "🌙";
  // Color de la barra del navegador en el móvil acorde al tema elegido
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => {
    m.setAttribute("content", oscuro ? "#18202c" : "#2f6fdb");
    m.removeAttribute("media");
  });
}
$("#btn-tema").addEventListener("click", () => {
  const nuevo = document.documentElement.dataset.tema === "oscuro" ? "claro" : "oscuro";
  document.documentElement.dataset.tema = nuevo;
  localStorage.setItem("tema", nuevo);
  pintarBotonTema();
});
pintarBotonTema();

// =====================================================================
// Modal de confirmación
// =====================================================================
function confirmar(texto, textoSi = "Aceptar") {
  return new Promise((resolve) => {
    $("#modal-texto").textContent = texto;
    $("#modal-si").textContent = textoSi;
    $("#modal").hidden = false;
    const cerrar = (v) => { $("#modal").hidden = true; $("#modal-si").onclick = $("#modal-no").onclick = null; resolve(v); };
    $("#modal-si").onclick = () => cerrar(true);
    $("#modal-no").onclick = () => cerrar(false);
  });
}

// =====================================================================
// Navegación entre vistas
// =====================================================================
const VISTAS = ["inicio", "instrucciones", "test", "resultados", "teoria"];
let vistaActual = "inicio";
function mostrar(vista, { scroll = true } = {}) {
  for (const v of VISTAS) $("#vista-" + v).hidden = v !== vista;
  vistaActual = vista;
  $("#tab-teoria").classList.toggle("activa", vista === "teoria");
  $("#tab-test").classList.toggle("activa", vista !== "teoria");
  if (scroll) window.scrollTo({ top: 0 });
}

const testEnCurso = () => estado && !estado.fin;

// =====================================================================
// INICIO
// =====================================================================
let numElegido = store.get("numPreguntas", 20);

function pintarInicio() {
  const temasGuardados = store.get("temas", TEMAS.map((t) => t.id));
  const lista = $("#lista-temas");
  lista.innerHTML = "";
  for (const t of TEMAS) {
    const n = BANCO.filter((p) => p.t === t.id).length;
    lista.append(el("label", { class: "check" },
      el("input", { type: "checkbox", value: t.id, ...(temasGuardados.includes(t.id) ? { checked: "" } : {}) }),
      t.nombre,
      el("span", { class: "cuenta" }, `${n}`)
    ));
  }
  lista.querySelectorAll("input").forEach((i) => i.addEventListener("change", actualizarDisponibles));

  const chips = $("#chips-num");
  chips.innerHTML = "";
  for (const n of OPCIONES_NUM) {
    chips.append(el("button", {
      class: "chip" + (n === numElegido ? " activo" : ""),
      onclick: () => { numElegido = n; store.set("numPreguntas", n); pintarInicio(); }
    }, n === 0 ? "Todas" : String(n)));
  }

  const modoGuardado = store.get("modo", "estudio");
  document.querySelector(`input[name=modo][value=${modoGuardado}]`).checked = true;
  $("#penalizar").checked = store.get("penalizar", false);

  pintarHistorial();
  actualizarDisponibles();
}

function temasSeleccionados() {
  return [...document.querySelectorAll("#lista-temas input:checked")].map((i) => i.value);
}

function poolActual() {
  const temas = temasSeleccionados();
  let pool = BANCO.filter((p) => temas.includes(p.t));
  if ($("#solo-fallos").checked) {
    const fallos = new Set(store.get("fallos", []));
    pool = pool.filter((p) => fallos.has(p.id));
  }
  return pool;
}

function actualizarDisponibles() {
  const fallos = store.get("fallos", []);
  $("#num-fallos").textContent = fallos.length;
  const pool = poolActual();
  const n = numElegido === 0 ? pool.length : Math.min(numElegido, pool.length);
  $("#info-disponibles").textContent =
    `${pool.length} preguntas disponibles con esta selección · el test tendrá ${n} (banco total: ${BANCO.length}).`;
  $("#btn-empezar").disabled = pool.length === 0;
  $("#fila-penalizar").hidden = modoSeleccionado() !== "examen";
}

function modoSeleccionado() {
  return document.querySelector("input[name=modo]:checked").value;
}

document.querySelectorAll("input[name=modo]").forEach((i) =>
  i.addEventListener("change", () => { store.set("modo", modoSeleccionado()); actualizarDisponibles(); }));
$("#solo-fallos").addEventListener("change", actualizarDisponibles);
$("#penalizar").addEventListener("change", () => store.set("penalizar", $("#penalizar").checked));
$("#temas-todos").addEventListener("click", () => { document.querySelectorAll("#lista-temas input").forEach((i) => (i.checked = true)); actualizarDisponibles(); });
$("#temas-ninguno").addEventListener("click", () => { document.querySelectorAll("#lista-temas input").forEach((i) => (i.checked = false)); actualizarDisponibles(); });

function pintarHistorial() {
  const hist = store.get("historial", []);
  $("#tarjeta-historial").hidden = hist.length === 0;
  const tb = $("#cuerpo-historial");
  tb.innerHTML = "";
  for (const h of hist.slice(0, 15)) {
    tb.append(el("tr", {},
      el("td", {}, new Date(h.fecha).toLocaleString("es-ES", { dateStyle: "short", timeStyle: "short" })),
      el("td", {}, h.modo === "examen" ? "Examen" : "Estudio"),
      el("td", {}, String(h.total)),
      el("td", {}, h.nota.toFixed(2)),
      el("td", {}, formatoTiempo(h.tiempo))
    ));
  }
}
$("#borrar-historial").addEventListener("click", async () => {
  if (await confirmar("¿Borrar el historial de resultados?", "Borrar")) { store.set("historial", []); pintarHistorial(); }
});

$("#btn-empezar").addEventListener("click", () => {
  store.set("temas", temasSeleccionados());
  const pool = poolActual();
  const n = numElegido === 0 ? pool.length : Math.min(numElegido, pool.length);
  const preguntas = barajar(pool).slice(0, n);
  if (modoSeleccionado() === "examen") mostrarInstrucciones(preguntas);
  else iniciarTest(preguntas, "estudio");
});

// =====================================================================
// INSTRUCCIONES DEL EXAMEN
// =====================================================================
let examenPendiente = null;

function htmlInstrucciones(n, penalizar) {
  const resta = penalizar
    ? `<li>❗ <b>Los errores restan</b>: cada fallo quita 1/(nº de opciones − 1) de pregunta (−1/3 en las de 4 opciones, −1 en las de verdadero/falso). Si dudas mucho, mejor déjala en blanco.</li>`
    : `<li>Los errores <b>no restan</b>, así que conviene responder todas aunque dudes.</li>`;
  return `
<ul class="lista-instr">
  <li>⏳ Tienes <b>1 hora y 30 minutos</b>. El tiempo restante aparece arriba a la derecha: se pone <span class="aviso-color">naranja</span> en los últimos 10 minutos y <span class="critico-color">rojo</span> en el último.</li>
  <li>⏰ Si se acaba el tiempo, el examen <b>se entrega automáticamente</b> con lo que tengas respondido.</li>
  <li>📋 El examen tiene <b>${n} pregunta${n === 1 ? "" : "s"}</b>, cada una con una única respuesta correcta.</li>
  <li>⚪ <b>Puedes dejar preguntas en blanco</b>: no suman ni restan. Para quitar una respuesta, vuelve a tocar la opción marcada o pulsa «Dejar en blanco».</li>
  <li>✏️ Puedes <b>cambiar tus respuestas</b> en cualquier momento antes de entregar.</li>
  <li>🔢 Muévete con «Anterior» y «Siguiente», deslizando la pregunta (en el móvil) o con la cuadrícula de números. Las preguntas ya respondidas aparecen en azul.</li>
  <li>🙈 <b>No verás si aciertas</b> hasta que entregues. Durante el examen no se puede consultar la teoría.</li>
  <li>📤 Pulsa <b>«Entregar examen»</b> cuando termines; si quedan preguntas en blanco te avisará antes.</li>
  <li>🧮 Nota = (aciertos${penalizar ? " − penalización" : ""}) ÷ nº de preguntas × 10. Se aprueba con un <b>5</b>.</li>
  ${resta}
  <li>📖 Al final verás la corrección de cada pregunta, con enlace a la parte de la teoría donde se explica.</li>
</ul>`;
}

function mostrarInstrucciones(preguntas) {
  examenPendiente = preguntas;
  $("#instrucciones-contenido").innerHTML = htmlInstrucciones(preguntas.length, $("#penalizar").checked);
  mostrar("instrucciones");
}
$("#btn-instr-volver").addEventListener("click", () => { examenPendiente = null; mostrar("inicio"); });
$("#btn-instr-empezar").addEventListener("click", () => {
  const p = examenPendiente; examenPendiente = null;
  iniciarTest(p, "examen");
});

// =====================================================================
// TEST
// =====================================================================
let estado = null;
let intervalo = null;

function prepararPregunta(p) {
  let opciones = p.o.map((texto, i) => ({ texto, correcta: i === p.a }));
  const esVF = p.o.length === 2 && p.o[0] === "Verdadero";
  if (!esVF) {
    opciones = barajar(opciones);
    // "Todas/Ninguna/Serían válidas..." siempre al final
    const alFinal = (o) => /^(todas|ninguna|serían válidas)/i.test(o.texto);
    opciones = [...opciones.filter((o) => !alFinal(o)), ...opciones.filter(alFinal)];
  }
  return { id: p.id, t: p.t, q: p.q, e: p.e, opciones };
}

function iniciarTest(preguntas, modo) {
  estado = {
    modo,
    preguntas: preguntas.map(prepararPregunta),
    respuestas: new Array(preguntas.length).fill(null),
    actual: 0,
    inicio: Date.now(),
    fin: null,
    penalizar: modo === "examen" && $("#penalizar").checked,
    fuente: preguntas // para "Otro test igual"
  };
  $("#etq-modo").textContent = modo === "examen" ? "📝 Examen" : "📘 Estudio";
  $("#ayuda-examen").hidden = modo !== "examen";
  $("#ayuda-examen").open = false;
  if (modo === "examen") $("#ayuda-examen-contenido").innerHTML = htmlInstrucciones(preguntas.length, estado.penalizar);
  $("#btn-entregar").textContent = modo === "examen" ? "Entregar examen" : "Terminar y ver resumen";
  mostrar("test");
  pintarPregunta();
  clearInterval(intervalo);
  intervalo = setInterval(tick, 250);
  tick();
}

function tick() {
  if (!estado || estado.fin) return;
  const trans = Date.now() - estado.inicio;
  const c = $("#crono");
  if (estado.modo === "examen") {
    const rest = LIMITE_EXAMEN_MS - trans;
    c.textContent = "⏳ " + formatoTiempo(rest);
    c.title = "Tiempo restante (transcurrido: " + formatoTiempo(trans) + ")";
    c.classList.toggle("aviso", rest <= 10 * 60 * 1000 && rest > 60 * 1000);
    c.classList.toggle("critico", rest <= 60 * 1000);
    if (rest <= 0) finalizar(true);
  } else {
    c.textContent = "⏱ " + formatoTiempo(trans);
    c.title = "Tiempo transcurrido";
    c.classList.remove("aviso", "critico");
  }
}

function pintarPregunta() {
  const { preguntas, respuestas, actual, modo } = estado;
  const p = preguntas[actual];
  const resp = respuestas[actual];
  const corregida = modo === "estudio" && resp !== null;

  $("#progreso-texto").textContent = `Pregunta ${actual + 1} de ${preguntas.length}`;
  const respondidas = respuestas.filter((r) => r !== null).length;
  $("#progreso-barra").style.width = (respondidas / preguntas.length) * 100 + "%";
  $("#tema-pregunta").textContent = NOMBRE_TEMA[p.t];
  $("#enunciado").textContent = p.q;

  const cont = $("#opciones");
  cont.innerHTML = "";
  p.opciones.forEach((o, i) => {
    let cls = "opcion";
    if (corregida) {
      if (o.correcta) cls += " correcta";
      else if (i === resp) cls += " incorrecta";
    } else if (i === resp) cls += " seleccionada";
    const b = el("button", { class: cls, onclick: () => responder(i) },
      el("span", { class: "letra" }, LETRAS[i]), el("span", {}, o.texto));
    if (corregida) b.disabled = true;
    cont.append(b);
  });

  const fb = $("#feedback");
  if (corregida) {
    const ok = p.opciones[resp].correcta;
    const correcta = p.opciones.find((o) => o.correcta).texto;
    fb.className = "feedback " + (ok ? "ok" : "mal");
    fb.innerHTML = "";
    fb.append(...[
      el("p", {}, el("strong", {}, ok ? "✅ ¡Correcto!" : "❌ Incorrecto. ")),
      ok ? null : el("p", {}, "Respuesta correcta: ", el("strong", {}, correcta)),
      p.e ? el("p", { class: "explicacion" }, "💡 " + p.e) : null,
      enlaceTeoria(p.id)
    ].filter(Boolean));
    fb.hidden = false;
  } else {
    fb.hidden = true;
  }
  $("#btn-blanco").hidden = !(modo === "examen" && resp !== null);

  $("#btn-anterior").disabled = actual === 0;
  const ultima = actual === preguntas.length - 1;
  const sig = $("#btn-siguiente");
  if (ultima) {
    sig.textContent = modo === "examen" ? "Entregar" : "Ver resultados";
  } else {
    sig.textContent = "Siguiente →";
  }
  pintarNavegador();
}

function pintarNavegador() {
  const { preguntas, respuestas, actual, modo } = estado;
  const nav = $("#navegador");
  nav.innerHTML = "";
  preguntas.forEach((p, i) => {
    let cls = "nav-item";
    const r = respuestas[i];
    if (r !== null) {
      if (modo === "estudio") cls += p.opciones[r].correcta ? " ok" : " mal";
      else cls += " respondida";
    }
    if (i === actual) cls += " actual";
    nav.append(el("button", { class: cls, title: `Pregunta ${i + 1}`, onclick: () => irA(i) }, String(i + 1)));
  });
}

function responder(i) {
  const { modo, actual, respuestas, preguntas } = estado;
  if (modo === "estudio") {
    if (respuestas[actual] !== null) return;
    respuestas[actual] = i;
    registrarFallo(preguntas[actual].id, preguntas[actual].opciones[i].correcta);
  } else {
    respuestas[actual] = respuestas[actual] === i ? null : i; // clic de nuevo = dejar en blanco
  }
  pintarPregunta();
  if (modo === "estudio") {
    // En pantallas pequeñas, que se vea la explicación sin tener que buscarla
    const fb = $("#feedback");
    const r = fb.getBoundingClientRect();
    if (r.bottom > window.innerHeight - 90) fb.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

$("#btn-blanco").addEventListener("click", () => {
  if (!estado || estado.modo !== "examen") return;
  estado.respuestas[estado.actual] = null;
  pintarPregunta();
});

function registrarFallo(id, acierto) {
  const fallos = new Set(store.get("fallos", []));
  if (acierto) fallos.delete(id); else fallos.add(id);
  store.set("fallos", [...fallos]);
}

function irA(i) {
  if (i < 0 || i >= estado.preguntas.length || i === estado.actual) return;
  const adelante = i > estado.actual;
  estado.actual = i;
  pintarPregunta();
  const card = $(".pregunta");
  card.classList.remove("entra-der", "entra-izq");
  void card.offsetWidth; // reinicia la animación
  card.classList.add(adelante ? "entra-der" : "entra-izq");
  // Si la pregunta quedó fuera de la vista (móvil), subir hasta ella
  const top = card.getBoundingClientRect().top;
  if (top < 0 || top > window.innerHeight * 0.4) {
    window.scrollTo({ top: window.scrollY + top - 70, behavior: "smooth" });
  }
}

// Deslizar a izquierda/derecha sobre la pregunta para cambiar de pregunta
(function activarSwipe() {
  const card = $(".pregunta");
  let x0 = null, y0 = null, t0 = 0;
  card.addEventListener("touchstart", (ev) => {
    if (ev.touches.length !== 1) return;
    x0 = ev.touches[0].clientX; y0 = ev.touches[0].clientY; t0 = Date.now();
  }, { passive: true });
  card.addEventListener("touchend", (ev) => {
    if (x0 === null || !estado) return;
    const dx = ev.changedTouches[0].clientX - x0;
    const dy = ev.changedTouches[0].clientY - y0;
    x0 = null;
    if (Date.now() - t0 > 700) return;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      irA(estado.actual + (dx < 0 ? 1 : -1));
    }
  }, { passive: true });
})();

$("#btn-anterior").addEventListener("click", () => irA(estado.actual - 1));
$("#btn-siguiente").addEventListener("click", () => {
  if (estado.actual === estado.preguntas.length - 1) pedirEntrega();
  else irA(estado.actual + 1);
});
$("#btn-entregar").addEventListener("click", pedirEntrega);

async function pedirEntrega() {
  const blancos = estado.respuestas.filter((r) => r === null).length;
  let msg;
  if (estado.modo === "examen") {
    msg = blancos > 0
      ? `Tienes ${blancos} pregunta(s) sin responder. ¿Entregar el examen de todas formas?`
      : "¿Entregar el examen?";
  } else {
    msg = blancos > 0 ? `Quedan ${blancos} pregunta(s) sin responder. ¿Terminar y ver el resumen?` : "¿Ver los resultados?";
  }
  if (await confirmar(msg, estado.modo === "examen" ? "Entregar" : "Terminar")) finalizar(false);
}

$("#btn-inicio").addEventListener("click", async () => {
  if (testEnCurso()) {
    if (!(await confirmar("¿Salir del test? Se perderá el progreso.", "Salir"))) return;
    clearInterval(intervalo);
    estado = null;
  }
  pintarInicio();
  mostrar("inicio");
});

// Atajos de teclado
document.addEventListener("keydown", (ev) => {
  if ($("#vista-test").hidden || !$("#modal").hidden || !estado) return;
  const k = ev.key.toLowerCase();
  const idx = "1234".indexOf(k) >= 0 ? "1234".indexOf(k) : "abcd".indexOf(k);
  if (idx >= 0 && idx < estado.preguntas[estado.actual].opciones.length) { responder(idx); return; }
  if ((ev.key === "Delete" || ev.key === "Backspace" || ev.key === "0") && estado.modo === "examen") {
    estado.respuestas[estado.actual] = null; pintarPregunta(); return;
  }
  if (ev.key === "ArrowRight") irA(estado.actual + 1);
  else if (ev.key === "ArrowLeft") irA(estado.actual - 1);
  else if (ev.key === "Enter") { ev.preventDefault(); $("#btn-siguiente").click(); }
});

// Aviso al cerrar la pestaña durante un test
window.addEventListener("beforeunload", (ev) => {
  if (estado && !estado.fin && !$("#vista-test").hidden) { ev.preventDefault(); ev.returnValue = ""; }
});

// =====================================================================
// RESULTADOS
// =====================================================================
function finalizar(porTiempo) {
  if (estado.fin) return;
  clearInterval(intervalo);
  estado.fin = Date.now();
  const tiempo = Math.min(estado.fin - estado.inicio, estado.modo === "examen" ? LIMITE_EXAMEN_MS : Infinity);
  const { preguntas, respuestas, modo, penalizar } = estado;

  let aciertos = 0, fallos = 0, blancos = 0, puntos = 0;
  preguntas.forEach((p, i) => {
    const r = respuestas[i];
    if (r === null) { blancos++; return; }
    if (p.opciones[r].correcta) { aciertos++; puntos += 1; }
    else { fallos++; if (penalizar) puntos -= 1 / (p.opciones.length - 1); }
    if (modo === "examen") registrarFallo(p.id, p.opciones[r].correcta);
  });
  const total = preguntas.length;
  const nota = Math.max(0, (puntos / total) * 10);

  const hist = store.get("historial", []);
  hist.unshift({ fecha: Date.now(), modo, total, nota, tiempo });
  store.set("historial", hist.slice(0, 50));

  $("#res-modo").textContent = (modo === "examen" ? "📝 Modo examen" : "📘 Modo estudio") +
    (porTiempo ? " · ⏰ Tiempo agotado, examen entregado automáticamente" : "");
  const notaEl = $("#res-nota");
  notaEl.textContent = nota.toFixed(2).replace(".", ",") + " / 10";
  notaEl.className = "nota " + (nota >= 5 ? "aprobado" : "suspenso");
  $("#res-mensaje").textContent =
    nota >= 9 ? "¡Sobresaliente! 🎉" : nota >= 7 ? "¡Notable! Muy bien 👏" : nota >= 5 ? "Aprobado 👍 Repasa las falladas." : "Suspenso. ¡Sigue practicando! 💪";
  $("#res-aciertos").textContent = aciertos;
  $("#res-fallos").textContent = fallos;
  $("#res-blanco").textContent = blancos;
  $("#res-tiempo").textContent = formatoTiempo(tiempo);
  $("#res-extra").textContent =
    `Media por pregunta: ${formatoTiempo(tiempo / total)}` + (penalizar ? " · Con penalización por error" : "");
  $("#btn-repetir-fallos").hidden = fallos + blancos === 0;
  $("#solo-mal").checked = false;
  pintarCorreccion();
  mostrar("resultados");
}

function pintarCorreccion() {
  const soloMal = $("#solo-mal").checked;
  const cont = $("#correccion");
  cont.innerHTML = "";
  estado.preguntas.forEach((p, i) => {
    const r = estado.respuestas[i];
    const tipo = r === null ? "blanco" : p.opciones[r].correcta ? "ok" : "mal";
    if (soloMal && tipo === "ok") return;
    const etiqueta = { ok: "✅ Correcta", mal: "❌ Incorrecta", blanco: "⚪ En blanco" }[tipo];
    const ul = el("ul");
    p.opciones.forEach((o, j) => {
      let cls = "";
      if (o.correcta) cls = "correcta";
      else if (j === r) cls = "incorrecta";
      ul.append(el("li", { class: cls }, `${LETRAS[j]}) ${o.texto}` + (j === r ? "  ← tu respuesta" : "")));
    });
    cont.append(el("div", { class: "tarjeta item-correccion " + tipo },
      el("p", { class: "tema-pregunta" }, `${i + 1}. ${etiqueta} · ${NOMBRE_TEMA[p.t]}`),
      el("h3", {}, p.q), ul,
      p.e ? el("p", { class: "explicacion" }, "💡 " + p.e) : null,
      enlaceTeoria(p.id)));
  });
  if (!cont.children.length) cont.append(el("p", { class: "muted centro" }, "¡No hay preguntas falladas! 🎉"));
}

$("#solo-mal").addEventListener("change", pintarCorreccion);
$("#btn-volver").addEventListener("click", () => { pintarInicio(); mostrar("inicio"); });
$("#btn-otro").addEventListener("click", () => {
  // Mismo número y mismos temas, nuevas preguntas aleatorias
  const pool = poolActual();
  const n = Math.min(estado.preguntas.length, pool.length);
  iniciarTest(barajar(pool).slice(0, n), estado.modo);
});
$("#btn-repetir-fallos").addEventListener("click", () => {
  const ids = new Set(estado.preguntas.filter((p, i) => {
    const r = estado.respuestas[i];
    return r === null || !p.opciones[r].correcta;
  }).map((p) => p.id));
  iniciarTest(barajar(BANCO.filter((p) => ids.has(p.id))), estado.modo);
});

// =====================================================================
// TEORÍA
// =====================================================================
const normalizar = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const quitarHtml = (h) => h.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ");
const idSeccion = (tema, i) => `teo-${tema}-${i}`;

// Índice plano de secciones con su texto normalizado (para búsqueda y enlaces)
const SECCIONES = [];
for (const bloque of TEORIA) {
  bloque.secciones.forEach((s, i) => {
    SECCIONES.push({
      tema: bloque.tema, idx: i, id: idSeccion(bloque.tema, i), titulo: s.titulo,
      texto: normalizar(s.titulo + " " + s.titulo + " " + quitarHtml(s.html))
    });
  });
}

// --- Enlace pregunta → sección: la sección del mismo tema con más palabras en común,
//     ponderadas por lo poco frecuentes que son (IDF). Se calcula al cargar.
const STOP = new Set(("que con los las del por una uno unos unas para como mas sus son esta este estos estas ese esa " +
  "cual cuales cuando donde entre sobre segun hasta desde tiene tienen puede pueden hay ser sin muy tambien " +
  "todas todos todo toda otra otro otras otros dicho siempre nunca solo sola respecto parte forma modo caso " +
  "verdadero falso correcta correcto incorrecta afirmacion siguientes observas imagen kahoot clave pregunta " +
  "respuesta opcion opciones anteriores ninguna alguna podemos podriamos estamos frente denomina llama").split(" "));
const tokens = (s) => normalizar(s).split(/[^a-z0-9ºª]+/).filter((w) => (w.length >= 3 || /^\d+$/.test(w)) && !STOP.has(w));

const tokSecciones = SECCIONES.map((s) => new Set(tokens(s.texto)));
const df = new Map();
for (const set of tokSecciones) for (const w of set) df.set(w, (df.get(w) || 0) + 1);
const idf = (w) => Math.log((SECCIONES.length + 1) / ((df.get(w) || 0) + 0.5));

const SECCION_DE = new Map();
for (const p of BANCO) {
  if (p.ts) { // sección indicada a mano en preguntas.js
    const s = SECCIONES.find((x) => x.tema === p.t && x.titulo === p.ts);
    if (s) { SECCION_DE.set(p.id, s); continue; }
  }
  const texto = p.q + " " + p.o[p.a] + " " + p.o[p.a] + " " + (p.e || "");
  const qt = new Set(tokens(texto));
  let mejor = null, mejorScore = -1;
  SECCIONES.forEach((s, k) => {
    if (s.tema !== p.t) return;
    let score = 0;
    for (const w of qt) if (tokSecciones[k].has(w)) score += idf(w);
    if (score > mejorScore) { mejorScore = score; mejor = s; }
  });
  if (mejor) SECCION_DE.set(p.id, mejor);
}

function enlaceTeoria(idPregunta) {
  const s = SECCION_DE.get(idPregunta);
  if (!s) return null;
  return el("p", { class: "enlace-teoria" },
    el("a", { href: "#" + s.id, onclick: (ev) => { ev.preventDefault(); abrirTeoria(s.id); } },
      "📖 Teoría: " + s.titulo + " →"));
}

let teoriaPintada = false;
let origenTeoria = null; // vista desde la que se llegó (para «Volver»)

function pintarTeoria() {
  const indice = $("#indice-teoria");
  const cont = $("#contenido-teoria");
  indice.innerHTML = ""; cont.innerHTML = "";
  for (const bloque of TEORIA) {
    const nombre = NOMBRE_TEMA[bloque.tema];
    indice.append(el("button", { class: "chip", onclick: () => {
      document.getElementById("tema-" + bloque.tema).scrollIntoView({ behavior: "smooth", block: "start" });
    } }, nombre.split("·")[0].trim()));

    const nPreg = BANCO.filter((p) => p.t === bloque.tema).length;
    const seccion = el("section", { class: "bloque-teoria", id: "tema-" + bloque.tema },
      el("div", { class: "cabecera-tema" },
        el("h2", {}, nombre),
        el("p", { class: "muted" }, bloque.intro),
        el("button", { class: "btn btn-primario", onclick: () => practicarTema(bloque.tema) },
          `✍️ Practicar este tema (${nPreg} preguntas)`)));
    bloque.secciones.forEach((s, i) => {
      const det = el("details", { class: "tarjeta seccion-teoria", id: idSeccion(bloque.tema, i) },
        el("summary", {}, s.titulo));
      const cuerpo = el("div", { class: "cuerpo-teoria" });
      cuerpo.innerHTML = s.html;
      det.append(cuerpo);
      seccion.append(det);
    });
    cont.append(seccion);
  }
  teoriaPintada = true;
}

function pintarAvisoVolver() {
  const aviso = $("#aviso-volver");
  if (testEnCurso()) {
    aviso.hidden = false;
    $("#aviso-volver-texto").textContent = `Tienes un test de estudio en curso (pregunta ${estado.actual + 1} de ${estado.preguntas.length}).`;
    $("#btn-volver-origen").textContent = "Volver al test →";
    $("#btn-volver-origen").onclick = () => { mostrar("test"); pintarPregunta(); };
  } else if (origenTeoria === "resultados" && estado) {
    aviso.hidden = false;
    $("#aviso-volver-texto").textContent = "Estabas revisando la corrección del test.";
    $("#btn-volver-origen").textContent = "Volver a la corrección →";
    $("#btn-volver-origen").onclick = () => mostrar("resultados");
  } else {
    aviso.hidden = true;
  }
}

async function abrirTeoria(idSec) {
  if (testEnCurso() && estado.modo === "examen") {
    await confirmar("Durante el examen no se puede consultar la teoría. Entrégalo primero 😉", "Entendido");
    return;
  }
  if (!teoriaPintada) pintarTeoria();
  if (vistaActual !== "teoria") origenTeoria = vistaActual;
  $("#buscar-teoria").value = "";
  filtrarTeoria();
  pintarAvisoVolver();
  mostrar("teoria", { scroll: !idSec });
  if (idSec) {
    const d = document.getElementById(idSec);
    d.open = true;
    d.classList.remove("resaltada"); void d.offsetWidth; d.classList.add("resaltada");
    requestAnimationFrame(() => {
      const top = d.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    });
  }
}

function filtrarTeoria() {
  const q = normalizar($("#buscar-teoria").value.trim());
  let visibles = 0;
  document.querySelectorAll(".seccion-teoria").forEach((d) => {
    const s = SECCIONES.find((x) => x.id === d.id);
    const ok = !q || s.texto.includes(q);
    d.hidden = !ok;
    if (q) d.open = ok;
    if (ok) visibles++;
  });
  document.querySelectorAll(".bloque-teoria").forEach((b) => {
    b.hidden = !!q && !b.querySelector(".seccion-teoria:not([hidden])");
  });
  $("#teoria-vacia").hidden = visibles > 0;
}
$("#buscar-teoria").addEventListener("input", filtrarTeoria);

function practicarTema(tema) {
  if (testEnCurso()) {
    confirmar("Ya tienes un test en curso. ¿Empezar uno nuevo de este tema? Se perderá el progreso.", "Empezar").then((ok) => {
      if (ok) { clearInterval(intervalo); estado = null; practicarTema(tema); }
    });
    return;
  }
  const pool = BANCO.filter((p) => p.t === tema);
  const n = numElegido === 0 ? pool.length : Math.min(numElegido, pool.length);
  iniciarTest(barajar(pool).slice(0, n), "estudio");
}

$("#tab-teoria").addEventListener("click", () => abrirTeoria(null));
$("#tab-test").addEventListener("click", () => {
  if (vistaActual !== "teoria") return;
  if (testEnCurso()) { mostrar("test"); pintarPregunta(); }
  else if (origenTeoria === "resultados" && estado) mostrar("resultados");
  else { pintarInicio(); mostrar("inicio"); }
});

// =====================================================================
pintarInicio();
mostrar("inicio");

// Instalable en el móvil y uso sin conexión (solo cuando se sirve por http/https)
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
