
# Cipher Check 🛡️

**Cipher Check** is a secure and simple real-time collaboration app where users can create and join virtual rooms. It's built with a MERN stack (MongoDB, Express.js, React.js, Node.js), with JWT authentication and dynamic UI using React Context and custom modals.

---

## 🚀 Features

- ✅ JWT-based user authentication
- 🧑‍🤝‍🧑 Create and join rooms
- 🎨 Room cards with background images and descriptions
- 👮 Private routes for authenticated views
- 💬 Real-time context-based modals
- ⚙️ Persistent state with localStorage

---

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router, Context API
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT
- **State Persistence**: localStorage

---

## 📂 Project Structure

```
Cipher-Check/
├── client/             # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/      # API fetch wrapper
│   │   └── App.js
│   └── public/
├── server/             # Express backend
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.js
├── .env
├── package.json
└── README.md
```

---

## 🔐 Environment Variables

Create a `.env` file in the root of the server with the following:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 💻 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/cipher-check.git
cd cipher-check
```

### 2. Install dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

---

## 🧪 Running Locally

### 1. Start backend

```bash
cd server
nodemon index.js
```

### 2. Start frontend

```bash
cd client
npm start
```

> Frontend will run on [http://localhost:3000](http://localhost:3000)  
> Backend will run on [http://localhost:5000](http://localhost:5000)

---

## 📦 Build for Production

To create a production-ready frontend build:

```bash
cd client
npm run build
```

You can then serve it using Vercel, Netlify, or your backend.

---

## 🤝 Contributing

Feel free to fork the repository, submit issues or pull requests!
