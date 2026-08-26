# Formularios de inscripción — Cancha Uno

Formularios públicos para anotarse en las listas de espera del club:

- [index.html](index.html) — clases de pádel (adultos)
- [academia.html](academia.html) — academia de chicos
- [abono.html](abono.html) — abonos
- [comprobante.html](comprobante.html) — subir foto de comprobante de pago (link personal por alumno, `?id=...&n=...`)
- [confirmar.html](confirmar.html) — confirmar el lugar del mes (link personal por alumno, `?id=...&n=...`)

Este repo solo contiene los formularios; el sistema de administración es privado.
Cada push a `main` se publica automáticamente en GitHub Pages (ver `.github/workflows/pages.yml`) — eso es **producción**, los alumnos ya tienen esos links mandados.

## Probar cambios sin tocar producción

Hay una rama `staging` pensada para esto. El flujo:

1. `git checkout staging`
2. Hacé los cambios y probalos ahí.
3. `git push origin staging` — esto **no** dispara el deploy a GitHub Pages (el workflow solo escucha `main`), así que producción no se entera.
4. Conectá esa rama a un hosting gratis con preview automático (Netlify o Cloudflare Pages) para tener una URL real donde abrir los formularios y probarlos como si fueras un alumno — ver instrucciones abajo.
5. Cuando estés conforme: `git checkout main && git merge staging && git push origin main` — recién ahí se publica en producción.

### Conectar Netlify para la URL de staging (una sola vez)

1. Entrá a https://netlify.com y logueate con tu cuenta de GitHub.
2. "Add new site" → "Import an existing project" → GitHub → elegí `Formulario-Padel`.
3. Build command: dejalo vacío (no hay build, son archivos estáticos). Publish directory: `.` (la raíz).
4. En "Site settings → Build & deploy → Branches": poné **`staging`** como production branch (así el dominio principal de Netlify sirve la rama de staging, no `main` — `main` seguís publicándolo vos a mano a producción vía GitHub Pages).
5. Netlify te da una URL tipo `algo-random.netlify.app`. Esa es tu URL de staging: separada de `nicolascapello7.github.io/Formulario-Padel/`, se actualiza sola cada vez que hacés push a `staging`.

**Ojo, importante:** `config.js` en `staging` sigue apuntando al **mismo proyecto de Supabase real** que producción (misma base de datos). Probar ahí es seguro para ver que el formulario se vea y funcione bien, pero **usá un `id`/`n` de prueba inventado** (no el de un alumno real) al probar `comprobante.html`/`confirmar.html`, para no mezclar filas de prueba con datos reales. Si en algún momento querés aislar de verdad los datos de prueba, se puede armar un segundo proyecto de Supabase solo para staging — avisame y lo armamos.
