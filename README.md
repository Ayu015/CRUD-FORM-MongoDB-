# Student Management System

A full-stack Student Management System built with **React**, **Vite**, **Tailwind CSS**, **Node.js**, **Express**, and **MariaDB**.

## Features

- Add a new student
- View all registered students
- Edit an existing student's details
- Store student records in a MariaDB database
- React frontend communicates with the Express REST API

> **Current status:** Create, Read, and Update are implemented. Delete functionality is not implemented yet.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MariaDB
- **Database driver:** mysql2

## Project Structure

```text
student-management/
├── backend/
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── .gitignore
└── README.md
```

Your exact folder structure may differ slightly depending on your local setup.

## Prerequisites

- Node.js and npm
- MariaDB Server
- Git (optional)

## 1. Clone the Repository

```bash
git clone https://github.com/Ayu015/CRUD-FORM-MongoDB-.git
cd CRUD-FORM-MongoDB-
```

## 2. Set Up the Database

Open the MariaDB command-line client and run:

```sql
CREATE DATABASE studentManagement;

USE studentManagement;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    fatherName VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    mobile VARCHAR(15) NOT NULL,
    course VARCHAR(50) NOT NULL
);
```

The SQL statements and sample/test records used during development can be shared in the repository, provided they contain only fictional test data and no real personal or confidential information.

## 3. Configure the Backend

Open a terminal in the `backend` directory:

```bash
cd backend
npm install
```

Configure your MariaDB connection in `backend/db.js`, or preferably store credentials in `backend/.env` and read them through environment variables.

Typical local connection settings:

- Host: `localhost`
- User: your MariaDB username
- Password: your local MariaDB password
- Database: `studentManagement`
- Port: `3306`

**Never commit the real `.env` file, passwords, API keys, or other credentials.** You can commit a `.env.example` file containing placeholder values only.

Start the backend:

```bash
node server.js
```

The API server runs at:

```text
http://localhost:5000
```

## 4. Start the Frontend

Open a second terminal in the project root:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually:

```text
http://localhost:5173
```

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/students` | Retrieve all students |
| POST | `/students` | Add a student |
| PUT | `/students/:id` | Update a student by ID |

## Git and Data Privacy

The `.gitignore` file excludes files that should remain local or private, such as:

- `.env` files containing database passwords or other secrets
- `node_modules`
- Build output and logs
- Local editor and operating-system configuration
- Private keys and certificates

**SQL files, database schema scripts, and fictional test data are not ignored by this `.gitignore`.** They can be committed when useful for project setup or testing.

Before pushing, check that you are not committing real personal or confidential information, such as real students' names with contact details, passwords, access tokens, private keys, or confidential company data.

Check what Git will include:

```bash
git status
git diff --cached --name-only
```

Note: `.gitignore` does not untrack files that were already committed. If a real secret was committed earlier, remove it from Git tracking/history as appropriate and rotate the exposed credential.

## Future Improvements

- Delete student records
- Search and filter students
- Form validation and clearer error messages
- Pagination for larger student lists
- Improved responsive UI
- Authentication and authorization before using real student information

## License

No license has been specified yet.
