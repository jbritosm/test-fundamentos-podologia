# 🦶 Test de Fundamentos de Podología (UCLM)

Aplicación web para estudiar la asignatura **Fundamentos de Podología** (Grado en Podología, UCLM, Talavera de la Reina) con preguntas tipo test aleatorias.

## Funciones
- **271 preguntas** sacadas de los Kahoots, los cuestionarios Moodle y el temario, organizadas en 7 temas. Cada una lleva su explicación.
- **Modo estudio**: corrige cada pregunta al momento, marca la respuesta correcta y explica por qué. El cronómetro cuenta hacia arriba.
- **Modo examen**: las preguntas se corrigen al entregar. Da la nota sobre 10 y tiene un **límite de 1 h 30 min**; al agotarse el tiempo, el examen se entrega solo. Puedes navegar entre preguntas y dejar alguna en blanco. Opcionalmente, los errores restan.
- **Cronómetro** del tiempo empleado en cada test.
- Preguntas y opciones en orden aleatorio.
- Filtro por temas y número de preguntas (10, 20, 30, 50 o todas).
- **Repaso de fallos**: guarda las preguntas falladas para repetirlas.
- Historial de notas.
- **Modo oscuro**: usa el ajuste del sistema y se puede cambiar con el botón 🌙/☀️.
- Atajos de teclado: `1-4` o `A-D` para responder, `←` `→` para moverse y `Enter` para continuar.

Todo se guarda en el `localStorage` del navegador: no hay servidor ni cuentas.

## Uso local
Abre `index.html` en el navegador. No necesita instalación.

## Publicar en GitHub Pages
1. Crea un repositorio nuevo en GitHub, por ejemplo `test-fundamentos-podologia`.
2. Desde esta carpeta, ejecuta:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/test-fundamentos-podologia.git
   git push -u origin main
   ```
3. En GitHub, ve a **Settings → Pages → Build and deployment**, elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`, y pulsa **Save**.
4. En uno o dos minutos la app estará en `https://TU_USUARIO.github.io/test-fundamentos-podologia/`.

## Añadir preguntas
Edita [`data/preguntas.js`](data/preguntas.js) y añade un objeto así:
```js
{ t: "t4", src: "temario", q: "Enunciado", o: ["Opción A", "Opción B", "Opción C", "Opción D"], a: 2, e: "Explicación" },
```
- `a` es el índice de la respuesta correcta, empezando en 0.
- Para verdadero/falso, usa `o: VF`.

## Estructura
```
index.html            Interfaz
styles.css            Estilos (claro y oscuro)
app.js                Lógica del test
data/preguntas.js     Banco de preguntas
BASE_CONOCIMIENTO.md  Resumen del temario y claves
```
