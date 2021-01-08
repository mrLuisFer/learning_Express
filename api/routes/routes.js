const { Router } = require("express")
const router = Router()

router.get("/api", (req, res) => {
  const data = {
    name: "Luis",
    lastName: "Alvarez",
    homework: "Making a rest api",
  }
  res.json(data)
})

module.exports = router
