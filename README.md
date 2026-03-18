# FocusBoard

FocusBoard is a React-based productivity web application designed to help users manage tasks, notes, and deadlines in a simple and structured way.

The application focuses on clarity, usability, and predictable behavior, making it suitable for everyday personal task management without requiring a backend.

---
## 🌍 Live Demo

👉 https://focusboard-sa6y.vercel.app

## 🚀 Tech Stack

### 🖥 Frontend
- React (Vite)
- JavaScript (ES6+)
- React Router

### 🧠 State Management
- Context API

### 💾 Storage
- LocalStorage (client-side persistence)

### 🚀 Deployment
- Vercel

---

## Motivation

Managing tasks and notes across multiple tools can become inefficient and fragmented.

FocusBoard was built to provide a **single, minimal interface** where users can:
- track tasks
- manage deadlines
- write quick notes
- monitor productivity

All within one consistent environment.

---

## Features

- 🔐 User authentication (Register / Login / Logout)
- ✅ Task management (add, edit, delete, complete)
- 📅 Deadline support for tasks
- 📊 Dashboard with task statistics
- ⚠️ Due Today and Overdue tracking
- 📝 Notes system
- 🌙 Dark mode

---

## Quality & Design Considerations

The application is designed with simplicity and predictability in mind.

Key decisions include:
- Component-based architecture for scalability
- Context API for global state management
- localStorage for persistent data storage
- Clear separation between UI and logic

These choices ensure the application remains easy to maintain and extend.

---

## Edge Cases Considered

The following scenarios are handled:

- Empty task or note lists
- Repeated reloads (persistent storage)
- Tasks without deadlines
- Overdue vs completed task handling
- Invalid or empty user input

This ensures stable behavior during normal use.

---

## Implementation Details

- Built using **React (Vite)**
- Uses **React Router** for navigation
- Uses **Context API** for authentication and theme state
- Data persistence handled via **localStorage**

---

## How to Run

```bash
git clone https://github.com/minavarlii/focusboard.git
cd focusboard
npm install
npm run dev
