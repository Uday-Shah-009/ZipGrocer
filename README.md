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

