function settings(app) {
  // settings
  app.set("appName", "Learning Express")
  app.set("port", 4000)
  // ejs
  app.set("view engine", "ejs")
}

module.exports = settings
