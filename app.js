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
  $("#btn-tema").textContent = document.documentElement.dataset.tema === "oscuro" ? "☀️" : "🌙";
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
function mostrar(vista) {
  for (const v of ["inicio", "test", "resultados"]) $("#vista-" + v).hidden = v !== vista;
  window.scrollTo({ top: 0 });
}

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
  iniciarTest(barajar(pool).slice(0, n), modoSeleccionado());
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
    fb.append(el("p", {}, el("strong", {}, ok ? "✅ ¡Correcto!" : "❌ Incorrecto. ")),
      ok ? null : el("p", {}, "Respuesta correcta: ", el("strong", {}, correcta)),
      p.e ? el("p", { class: "explicacion" }, "💡 " + p.e) : null);
    fb.hidden = false;
  } else {
    fb.hidden = true;
  }

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
}

function registrarFallo(id, acierto) {
  const fallos = new Set(store.get("fallos", []));
  if (acierto) fallos.delete(id); else fallos.add(id);
  store.set("fallos", [...fallos]);
}

function irA(i) {
  if (i < 0 || i >= estado.preguntas.length) return;
  estado.actual = i;
  pintarPregunta();
}

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
  if (estado && !estado.fin && !$("#vista-test").hidden) {
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
      p.e ? el("p", { class: "explicacion" }, "💡 " + p.e) : null));
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
pintarInicio();
mostrar("inicio");
