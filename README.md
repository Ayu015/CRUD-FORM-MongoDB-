# Student Management System

A simple Student Management System built using **React.js, Node.js, Express.js, and MongoDB**.

This project allows users to add student details and view all registered students. Student records are stored in MongoDB Atlas.

## 🚀 Technologies Used

### Frontend
- React.js
- JavaScript
- Tailwind CSS
- HTML

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- dotenv

## ✨ Features Implemented

- Add new student records.
- Store student details in MongoDB Atlas.
- Fetch all student records from the database.
- Display students in a responsive table.
- Form validation using HTML required attributes.
- Clear form fields after successful submission.

## 📋 Student Information

The application stores the following details:

- Student Name
- Father's Name
- Email
- Mobile Number
- Course

## 📁 Project Structure

```text
student-management/
│
├── backend/
│   ├── models/
│   │   └── Student.js
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── node_modules/
│
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── public/
├── package.json
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Ayu015/CRUD-FORM-MongoDB-.git
```

### 2. Navigate to Project Directory

```bash
cd CRUD-FORM-MongoDB-
```

### 3. Install Frontend Dependencies

```bash
npm install
```

### 4. Install Backend Dependencies

```bash
cd backend
npm install
```

### 5. Configure Environment Variables

Create a `.env` file inside the backend folder.

Add your MongoDB connection string:

```env
MONGO_URI=your_mongodb_connection_string
```

Replace the placeholder with your MongoDB Atlas connection string.

### 6. Start the Backend Server

Inside the backend folder, run:

```bash
node server.js
```

Backend runs at:

```text
http://localhost:5000
```

### 7. Start the Frontend

Open another terminal in the main project directory and run:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/students` | Add a new student |
| GET | `/students` | Fetch all students |

## 🗄️ Database Structure

**Database:** `studentManagement`

**Collection:** `students`

Each student document contains:

```json
{
  "name": "Ayush Singh",
  "fatherName": "Father Name",
  "email": "student@example.com",
  "mobile": "9876543210",
  "course": "B.Tech"
}
```

## 🛠️ Upcoming Features

- [ ] Edit student details (UPDATE).
- [ ] Delete student records (DELETE).
- [ ] Improve UI and user experience.
- [ ] Add better form validation.

## 👨‍💻 Developer

**Ayush Singh**

B.Tech Graduate | Full Stack Development Learner

---

⭐ If you find this project useful, consider giving it a star!