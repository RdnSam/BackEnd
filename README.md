# Backend Express dengan PostgreSQL dan Prisma

## 📌 Deskripsi
Proyek ini adalah backend API yang dikembangkan dengan **Express.js**, menggunakan **PostgreSQL** sebagai database, dan **Prisma ORM** untuk manajemen data. API ini memiliki fitur **manajemen pengguna dengan peran (role) mahasiswa dan dosen**.

## 🚀 Instalasi dan Setup
### **1. Clone Repository**
```bash
git clone https://github.com/username/backend-express-prisma.git
cd backend-express-prisma
```

### **2. Instal Dependensi**
```bash
npm install
```

### **3. Konfigurasi `.env`**
Buat file `.env` di root proyek dan isi dengan:
```
DATABASE_URL=postgresql://user:password@localhost:5432/ujikom_db
JWT_SECRET=my_secret_key
```

### **4. Setup Database dan Prisma**
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### **5. Jalankan Server**
```bash
npm start
```
Server akan berjalan di `http://localhost:5000`

## 📡 API Endpoint

### **1. Get All Users**
- **Endpoint:** `GET /api/users`
- **Response:**
```json
[
  {
    "id": 1,
    "nama": "John Doe",
    "email": "johndoe@example.com",
    "role": "mahasiswa"
  }
]
```

### **2. Get User by ID**
- **Endpoint:** `GET /api/users/:id`
- **Response:**
```json
{
  "id": 1,
  "nama": "John Doe",
  "email": "johndoe@example.com",
  "role": "mahasiswa"
}
```

### **3. Register User**
- **Endpoint:** `POST /api/users/register`
- **Request Body:**
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123",
  "role": "mahasiswa"
}
```
- **Response:**
```json
{
  "id": 1,
  "nama": "John Doe",
  "email": "johndoe@example.com",
  "role": "mahasiswa"
}
```

### **4. Login User**
- **Endpoint:** `POST /api/users/login`
- **Request Body:**
```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```
- **Response:**
```json
{
  "token": "your.jwt.token",
  "user": {
    "id": 1,
    "nama": "John Doe",
    "email": "johndoe@example.com",
    "role": "mahasiswa"
  }
}
```

### **5. Update User**
- **Endpoint:** `PUT /api/users/:id`
- **Request Body:**
```json
{
  "name": "John Updated",
  "email": "johnupdated@example.com",
  "role": "dosen"
}
```
- **Response:**
```json
{
  "id": 1,
  "nama": "John Updated",
  "email": "johnupdated@example.com",
  "role": "dosen"
}
```

### **6. Delete User**
- **Endpoint:** `DELETE /api/users/:id`
- **Response:**
```json
{
  "message": "User deleted"
}
```

## 📦 Struktur Direktori
```
backend-express-prisma/
│── prisma/
│   ├── migrations/
│   ├── schema.prisma
│── src/
│   ├── controllers/
│   │   ├── userController.js
│   ├── models/
│   │   ├── userModel.js
│   ├── routes/
│   │   ├── userRoutes.js
│── .env
│── server.js
│── package.json
```

## 🛠️ Teknologi yang Digunakan
- **Express.js** - Backend framework
- **PostgreSQL** - Database
- **Prisma ORM** - Query builder untuk database
- **jsonwebtoken (JWT)** - Autentikasi

## 📖 Lisensi
Proyek ini menggunakan lisensi **MIT**.
