# MyContact Backend (Node.js + Express + JWT Auth)

A secure REST API for managing user contacts with authentication and authorization using **JWT**, **bcrypt**, and **Express.js**.

---

## 🚀 Features

* User Registration & Login (with hashed passwords)
* JWT Authentication for secure access
* Private CRUD routes for contacts
* Middleware for token validation
* MongoDB (Mongoose) integration

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
```

### 2. Navigate to the project folder

```bash
cd mycontact-backend-nodejs
```

### 3. Install dependencies

```bash
npm install
```

---

## 📦 Dependencies Used

| Package                        | Description                         |
| ------------------------------ | ----------------------------------- |
| **express**                    | Web framework for Node.js           |
| **mongoose**                   | MongoDB object modeling tool        |
| **dotenv**                     | Loads environment variables         |
| **bcrypt**                     | For password hashing                |
| **jsonwebtoken (jwt)**         | For creating and verifying tokens   |
| **express-async-handler**      | Simplifies async error handling     |
| **nodemon** *(dev dependency)* | Auto-restarts server on code change |

---

## 🔑 Environment Variables

Create a `.env` file in the root folder and add:

```
PORT=5001
MONGO_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_jwt_secret_key
```

---

## 🧩 Available Scripts

### Start server (development)

```bash
npm run dev
```

### Start server (production)

```bash
npm start
```

---

## 👥 Authentication Flow

### 1. Register a new user

**POST** `/api/users/register`

**Body:**

```json
{
  "username": "Yash Sharma",
  "email": "yash@example.com",
  "password": "MyStrongPass123"
}
```

### 2. Login user

**POST** `/api/users/login`

**Body:**

```json
{
  "email": "yash@example.com",
  "password": "MyStrongPass123"
}
```

**Response:**

```json
{
  "accessToken": "your_jwt_token_here"
}
```

### 3. Access current user

**GET** `/api/users/current`

**Header:**

```
Authorization: Bearer <your_jwt_token>
```

---

## 🔒 Private CRUD Routes for Contacts

All contact routes require authentication via JWT token in headers.

### ➕ Create Contact

**POST** `/api/contacts`

```json
{
  "name": "Yash Sharma",
  "email": "yashsharma@example.com",
  "phone": "9876543210"
}
```

### 📜 Get All Contacts

**GET** `/api/contacts`

### 🔍 Get Contact by ID

**GET** `/api/contacts/:id`

### ✏️ Update Contact

**PUT** `/api/contacts/:id`

### ❌ Delete Contact

**DELETE** `/api/contacts/:id`

**All these routes require:**

```
Authorization: Bearer <your_jwt_token>
```

---

## 🧠 How Private Methods Work

1. User logs in and receives a JWT token
2. Frontend sends token in the `Authorization` header
3. `validateToken` middleware verifies token and attaches `req.user`
4. Only then the controller executes CRUD actions
5. Unauthorized or invalid tokens return `401 Unauthorized`

---

## ✅ Example Authorization Header

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...
```

---

## 📁 Project Structure

```
mycontact-backend-nodejs/
├── controllers/
│   ├── userController.js
│   └── contactController.js
├── middleware/
│   ├── errorHandler.js
│   └── validateTokenHandler.js
├── models/
│   ├── userModel.js
│   └── contactModel.js
├── routes/
│   ├── userRoutes.js
│   └── contactRoutes.js
├── app.js
├── server.js
├── .env
└── package.json

