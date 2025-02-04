const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const userRoutes = require("./routes/userRoutes")

dotenv.config()
const app = express()
const port = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Routes
app.use("/api/users", userRoutes) // <--- Tambahkan ini

// Jalankan server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
