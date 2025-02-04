// backend/models/userModel.js
const prisma = require("../db")
const bcrypt = require("bcryptjs")

const getAllUsers = async () => {
  return await prisma.user.findMany({
    select: { id: true, name: true, email: true },
  })
}

const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id: Number(id) },
    select: { id: true, name: true, email: true },
  })
}

// const createUser = async (name, email, password) => {
//   const hashedPassword = await bcrypt.hash(password, 10)
//   return await prisma.user.create({
//     data: { name, email, password: hashedPassword },
//     select: { id: true, name: true, email: true },
//   })
// }
const createUser = async (name, email, password) => {
  return await prisma.user.create({
    data: { name: name, email, password, role: "user" },
    select: { id: true, name: true, email: true, role: true },
  })
}

const updateUser = async (id, name, email) => {
  return await prisma.user.update({
    where: { id: Number(id) },
    data: { name, email },
    select: { id: true, name: true, email: true },
  })
}

const deleteUser = async (id) => {
  return await prisma.user.delete({ where: { id: Number(id) } })
}

const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({ where: { email } })
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  findUserByEmail,
}
