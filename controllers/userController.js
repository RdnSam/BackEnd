// logik nya
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  findUserByEmail,
} = require("../models/userModel")
const jwt = require("jsonwebtoken")
// const bcrypt = require("bcryptjs")

const getUsers = async (req, res) => {
  const users = await getAllUsers()
  res.json(users)
}

const getUser = async (req, res) => {
  const user = await getUserById(req.params.id)
  res.json(user)
}

const registerUser = async (req, res) => {
  const { name, email, password } = req.body
  const existingUser = await findUserByEmail(email)
  if (existingUser)
    return res.status(400).json({ message: "Email already exists" })
  const newUser = await createUser(name, email, password)
  res.json(newUser)
}

// const loginUser = async (req, res) => {
//   const { email, password } = req.body
//   const user = await findUserByEmail(email)
//   if (!user) return res.status(400).json({ message: "Invalid credentials" })
//   const validPassword = await bcrypt.compare(password, user.password)
//   if (!validPassword)
//     return res.status(400).json({ message: "Invalid credentials" })
//   const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
//     expiresIn: "1h",
//   })
//   res.json({ token, user: { id: user.id, name: user.name, email: user.email } })
// }

const loginUser = async (req, res) => {
  const { email, password } = req.body
  const user = await findUserByEmail(email)
  if (!user || user.password !== password) {
    return res.status(400).json({ message: "Invalid credentials" })
  }
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  })
  res.json({ token, user: { id: user.id, name: user.name, email: user.email } })
}
const editUser = async (req, res) => {
  const { name, email } = req.body
  const updatedUser = await updateUser(req.params.id, name, email)
  res.json(updatedUser)
}

const removeUser = async (req, res) => {
  await deleteUser(req.params.id)
  res.json({ message: "User deleted" })
}

module.exports = {
  getUsers,
  getUser,
  registerUser,
  loginUser,
  editUser,
  removeUser,
}
