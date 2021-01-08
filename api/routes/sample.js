const { Router } = require("express")
const router = Router()

// DB simulation
const data = require("../sample.json")

router.get("/", (req, res) => {
  console.log(data)
  res.json(data)
})

router.post("/", (req, res) => {
  // console.log(req.body)
  const { name, lastName, emotion } = req.body
  if (name && lastName && emotion) {
    const id = data.length + 1
    const newSample = {
      id,
      ...req.body,
    }
    data.push(newSample)
    res.json("saved")
  } else {
    res.status(500).json({ error: "There was an error" })
  }
  res.send("received")
})

module.exports = router
