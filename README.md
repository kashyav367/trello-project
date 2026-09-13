# 📋 Trello-Style Task Board API

A backend API for a Trello-inspired task management app — built to practice designing REST APIs, authentication, and MongoDB data modeling for a real-world board/list/card structure.

---

## ✨ Overview

This project implements the core backend of a task board application, letting users:

- Sign up and sign in securely
- Create and manage **boards**
- Organize work into **lists**
- Add, update, and track **cards** within lists

Instead of relying on a third-party API, the entire auth and data layer is built from scratch using Node.js, Express, and MongoDB.

---

## ⚙️ Features

- 🔐 User authentication with **JWT**
- 🛡 Protected routes via auth middleware
- 📋 Board, list, and card management (CRUD)
- 🗄 MongoDB + Mongoose for schema-based data modeling
- 🔧 Environment-based configuration using `dotenv`

---

## 🏗️ Architecture

- **Backend:** Node.js + Express
- **Database:** MongoDB
- **ODM:** Mongoose
- **Authentication:** JWT (jsonwebtoken)
- **Config:** dotenv

---

## 📦 Project Structure

```
.
├── src/                # Route, controller, and model definitions
├── server.js           # App entry point
├── package.json
└── .gitignore
```

---

## 🚀 Getting Started

Clone and install:

```bash
git clone https://github.com/kashyav367/trello-project.git
cd trello-project
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=replace_this_with_a_strong_secret
```

Run in development mode:

```bash
npm run dev
```

Or start normally:

```bash
npm start
```

---

## 📌 Limitations & Future Work

- No refresh token support yet
- No role-based access control (admin vs. member) on boards
- No input validation layer yet
- No automated tests

Planned improvements:

- Add board member invites and permissions
- Add drag-and-drop ordering support for lists/cards
- Add request validation (e.g. Zod/Joi)
- Write unit and integration tests

---

## Author

**Ankit Kumar Singh**

If this was helpful, consider starring the repo ⭐
