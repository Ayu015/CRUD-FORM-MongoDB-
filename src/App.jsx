import { useState } from "react";

function App() {

  const [student, setStudent] = useState({
    name: "",
    fatherName: "",
    email: "",
    mobile: "",
    course: ""
  });

  function handleChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(student);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">

        <h1 className="text-2xl font-bold text-center mb-6">
          Student Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={student.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="fatherName"
            placeholder="Father's Name"
            value={student.fatherName}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={student.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={student.mobile}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <select
            name="course"
            value={student.course}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          >
            <option value="">Select Course</option>
            <option value="B.Tech">B.Tech</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="MBA">MBA</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Add Student
          </button>

        </form>

      </div>

    </div>
  );
}

export default App;