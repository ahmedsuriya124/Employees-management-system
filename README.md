# 👨‍💼 Employee Management System

A simple and clean Employee Management System built using **React.js** and **Tailwind CSS**.  
It allows an admin to assign tasks to employees, track task status, and store data using localStorage.

> ✅ Live Demo: [Click to View Live Site](https://employees-management-sys.netlify.app/)

---

## 📌 Features

- 🔐 **Admin Panel** to assign tasks
- 👤 **Employee Task Management**
- 📝 Track task status: Active, Completed, Failed
- 🗃️ Data stored and managed in **LocalStorage**
- 📁 Organized folder structure with React Context API

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|--------|
| React.js | Frontend Framework |
| Tailwind CSS | Styling |
| Context API | State Management |
| LocalStorage | Persistent Data |
| Netlify | Deployment |

---

## 🔐 Login System

- 🔸 This app uses **LocalStorage** to simulate a login system.
- 🔸 Admin and employees are **predefined** in the app data (no signup).
- 🔸 Use the following to login:

### 👉 Admin Login
- **Email:** `admin1@example.com`
- **Password:** `123`

### 👉 Employee Login (by name)
- **Email:** `employee1@example.com`
- **Password:** `123`

> ⚠️ Make sure LocalStorage is not cleared in your browser while using the app.

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/your-username/employee-management-system.git
cd employee-management-system
npm install
npm start
