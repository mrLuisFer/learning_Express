const express = require("express")
const router = express.Router()

const title = "Express"

// Routing
router.get("/", (req, res) => {
  const data = [
    { name: "jhon" },
    { name: "doe" },
    { name: "luis" },
    { name: "ryan" },
  ]
  res.render("index.ejs", { people: data, title: title })
})

router.get("/contact", (req, res) => {
  res.render("contact.ejs", { title: title })
})

router.get("/user", (req, res) => {
  res.send({
    name: "luis",
    lastname: "alvarez",
  })
})

router.post("/user/:id", (req, res) => {
  console.log(req.body)
  // son los parametros de la red
  console.log(req.params)
  res.send("something received")
})

router.post("/about", (req, res) => {
  res.send(req.body)
})

router.put("/user/:id", (req, res) => {
  console.log(req.body)
  res.send(`${req.params.id} updated`)
})

router.delete("/user/:id", (req, res) => {
  res.send(`${req.params.id} deleted`)
})

module.exports = router
