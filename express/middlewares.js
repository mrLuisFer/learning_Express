const morgan = require("morgan")

function middlewares(app) {
  // middlewares
  // function logger(req, res, next) {
  //   console.log(`Route ${req.protocol}://${req.get("host")}${req.originalUrl}`)
  //   next()
  // }
  // // asi entiende los json de javascript
  // app.use(express.json())
  // app.use(logger)

  // app.all("/user", (req, res, next) => {
  //   console.log("in the way")
  //   next()
  // })

  // morgan middleware
  app.use(morgan("dev"))
}

module.exports = middlewares
