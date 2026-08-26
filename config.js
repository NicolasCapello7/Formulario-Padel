// Configuración compartida por todos los formularios de esta carpeta
// (index.html, academia.html, abono.html, comprobante.html, confirmar.html).
// Un solo lugar para rotar la anon key o cambiar el número de WhatsApp,
// en vez de tener que buscarlo archivo por archivo.
//
// OJO: esto NO es un secreto. Es un sitio 100% estático (GitHub Pages, sin
// build ni backend propio), así que cualquiera que abra un formulario puede
// ver este archivo con "Ver código fuente". La anon key de Supabase está
// diseñada para ser pública: lo que protege los datos son las políticas RLS
// del lado del servidor (ver supabase.sql), no que esta key esté escondida.
window.APP_CONFIG = {
  SUPA_URL: "https://yhmtbvkpjadsvcdziegx.supabase.co",
  SUPA_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlobXRidmtwamFkc3ZjZHppZWd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyNjgwNTAsImV4cCI6MjA5OTg0NDA1MH0.koAPJeVAkugiPz9yT_eg3wWqUe9NtbkU-2Yw_wt-3m4",
  // ⚠️ CAMBIAR ACÁ: número de WhatsApp del profe, con código de país y solo dígitos.
  TELEFONO_PROFE: "5491100000000",
};
