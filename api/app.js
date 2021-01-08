const express = require("express")
const app = express()
const morgan = require("morgan")

// middlewares
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))
//// for read javascript json
app.use(express.json())

// variables
app.set("port", process.env.PORT || 4000)
const port = app.get("port")
app.set("json spaces", 2)

// routes
app.use(require("./routes/routes"))
app.use("/api/test", require("./routes/sample"))

// Starting the server
app.listen(port, () => {
  console.log(`server on port ${port}`)
})
