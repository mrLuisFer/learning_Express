const express = require("express")
const app = express()
const path = require("path")

// server port
app.listen(app.get("port"), () => {
  console.log(app.get("appName"))
  console.log(`server on port:`, app.get("port"))
})

// settings
const settings = require("./express/settings")
settings(app)

// middlewares
const middlewares = require("./express/middlewares")
middlewares(app)

// routes
const routes = require("./express/routes")
app.use(routes)

// static files
//// path and dirname es para unir las rutas en cualquier S.O.
app.use(express.static(path.join(__dirname, "public")))
