// function HideTopbarPlugin() {
//   // this plugin overrides the Topbar component to return nothing
//   return {
//     components: {
//       Topbar: function() { return null },
//       Configs: function() { return null }
//     }
//   }
// }

window.onload = function() {
  const ui = SwaggerUIBundle({
    url: "http://petstore.swagger.io/v2/swagger.json",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  })
  window.ui = ui
}