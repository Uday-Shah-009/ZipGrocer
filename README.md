# 🛒 ZipGrocer – Grocery Delivery Platform

Full-stack grocery delivery system with:

- 🧠 **Backend**: Node.js + Express + MongoDB
- 🛠️ **Admin Panel**: React + TanStack Router + Zustand + React Query
- 📱 **Upcoming**: React Native apps for Customer & Delivery Partner

---

## ⚙️ Tech Stack

### Backend
- Node.js, Express, MongoDB, Mongoose
- JWT, bcryptjs, Nodemailer
- Socket.IO (planned), dotenv, cors, morgan

### Admin Panel
- React + Vite
- TanStack Router (v1)
- Zustand (global auth/cart state)
- TanStack Query (data fetching)
- Axios, Tailwind CSS, Toastify

---

## 📁 Project Structure

ZipGrocer/
├── backend/ # Express API
├── admin-panel/ # React Admin Dashboard
├── README.md # You are here


---

## 🚀 How to Run

### 1. Clone Repo

```bash
git clone https://github.com/Uday-Shah-009/ZipGrocer.git
cd ZipGrocer
```

### 2. Setup Backend
``` bash
cd backend
npm install
cp .env.example .env  # Set MONGODB_URI, JWT_SECRET, etc.

# Start Server
npm run dev   # or npm start
Backend will run on: http://localhost:5000
```
### 3.setup admin panel
``` bash
cd ../admin-panel
npm install

# Create .env file
echo "VITE_API_BASE_URL=http://localhost:5000/api" > .env

# Start Admin Panel
npm run dev
Admin will run on: http://localhost:5173
```
## 📦 Packages & Why They’re Used

### 🔙 Backend (Node.js + Express)

| Package              | Purpose                                                                 |
|----------------------|-------------------------------------------------------------------------|
| `express`            | Web server to handle API routes                                         |
| `mongoose`           | MongoDB ORM for defining models and querying the DB                    |
| `jsonwebtoken`       | For generating and verifying JWT tokens (auth)                          |
| `bcryptjs`           | Hashing passwords securely before storing                              |
| `dotenv`             | Load secrets like DB URI, JWT key from `.env` file                      |
| `cors`               | Allow cross-origin requests from frontend (e.g., React admin panel)     |
| `morgan`             | Log API requests in the console                                         |
| `nodemailer`         | Send emails for events (register, order placed, delivered, etc.)        |
| `cloudinary`         | Upload and store product images                                         |
| `multer`             | Handle file uploads before sending to Cloudinary                       |
| `express-async-handler` | Catch errors in async routes without `try/catch` everywhere        |
| `socket.io` *(planned)* | Real-time notifications like delivery updates                        |

> Dev-only: `nodemon` (auto-restart server on file change)

---

### 🖥️ Admin Panel (React + Vite)

| Package                     | Purpose                                                               |
|-----------------------------|-----------------------------------------------------------------------|
| `react`, `react-dom`        | Core libraries to build the UI                                       |
| `vite`                      | Fast dev server and production bundler                               |
| `@tanstack/react-router`    | Route handling, navigation, and route protection                     |
| `@tanstack/react-query`     | Data fetching, caching, and sync with backend APIs                   |
| `zustand`                   | Global state (auth, cart, etc.) across the app                       |
| `axios`                     | Make HTTP requests to backend APIs                                   |
| `react-hook-form`           | Handle form state, validation, and submission                        |
| `react-toastify`            | Show toast notifications (like "Category added!" or errors)          |
| `tailwindcss`               | Utility-first CSS for beautiful, responsive UI                       |
| `cloudinary`                | Upload product images directly to cloud storage                      |

> Dev-only: `eslint`, `prettier` for clean and consistent code

---

This package setup keeps the project modular, scalable, and dev-friendly.

## 📦 Installing Dependencies

Follow these commands to install all required packages for both the **Backend** and **Admin Panel**.

---

### 🔙 Backend (Node.js + Express)

Navigate to the `backend/` folder and run:

```bash
npm install express mongoose jsonwebtoken bcryptjs dotenv cors morgan nodemailer cloudinary multer express-async-handler
```

### 🖥️ Admin Panel (React + Vite)
Navigate to the admin-panel/ folder and run:
``` bash
npm install react react-dom axios @tanstack/react-query @tanstack/react-router zustand react-hook-form react-toastify tailwindcss cloudinary
```

# 🧑‍💻 Roles

- **Admin**: Product/category CRUD, manage orders & delivery partners  
- **User**: (To be used in upcoming mobile app)  
- **Delivery Partner**: (Upcoming app for accepting & updating orders)

---

# 🔑 Auth & Security

- JWT for auth (`Authorization: Bearer <token>`)
- Role-based protected routes in backend & frontend
- Zustand store to persist auth state in admin panel

---

# 🛠 Features

## ✅ Backend

- Auth (Register/Login for all roles)
- Category/Product CRUD (Admin)
- Cart, Orders, Delivery tracking
- Nodemailer (emails on events)
- Socket.IO ready for real-time updates

## ✅ Admin Panel

- Protected routes via TanStack Router
- Zustand auth & global state
- React Hook Form + Toastify
- API hooks via TanStack Query
- Cloudinary for image uploads
- Modular folder structure:  
  `/shared`, `/features`, `/pages`, `/router`, `/store`

---

# 📱 Upcoming Phase (React Native)

Planned mobile apps using same backend API:

## 📲 User App:

- Browse products, cart, checkout  
- Track order status  

## 🚚 Delivery Partner App:

- Accept & deliver orders  
- Live location + status update  

---

# 🧪 Testing

- Use **Postman** to test APIs (auth, products, orders)
- MongoDB Atlas for cloud DB (recommended)

---


## 🔐 Environment Variables

Create a `.env` file in the `backend/` directory and add the following:

```env
PORT=5000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
EMAIL_USER=you@gmail.com
EMAIL_PASS=your_password
```

### still in making 🔼

