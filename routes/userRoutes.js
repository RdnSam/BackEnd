const express = require("express")
const {
  getUsers,
  getUser,
  registerUser,
  loginUser,
  editUser,
  removeUser,
} = require("../controllers/userController")
const router = express.Router()

router.get("/", getUsers)
router.get("/:id", getUser)
router.post("/register", registerUser)
router.post("/login", loginUser)
router.put("/:id", editUser)
router.delete("/:id", removeUser)

module.exports = router
