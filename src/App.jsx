import { useState, useEffect } from "react";

function App() {
  const [student, setStudent] = useState({
    name: "",
    fatherName: "",
    email: "",
    mobile: "",
    course: "",
  });

  const [students, setStudents] = useState([]);
  useEffect(() => {
    async function fetchStudents() {
      try {
        const response = await fetch("http://localhost:5000/students");

        const data = await response.json();

        setStudents(data);
      } catch (error) {
        console.log("Error fetching students:", error);
      }
    }

    fetchStudents();
  }, []);

  function handleChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/students", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(student),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Student added successfully!");

        console.log(data);

        setStudent({
          name: "",
          fatherName: "",
          email: "",
          mobile: "",
          course: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Something went wrong!");
    }
  }

  return (
    <div className="bg-gray-100 ">
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
      <div className="bg-white p-8 rounded-xl  shadow-lg w-full max-w-lg">
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
      <div className="mt-8 overflow-x-auto mb-10 bg-gray-100 mx-20">
        <h2 className="text-xl font-bold mb-4">Students List</h2>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Father Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Mobile</th>
              <th className="border p-2">Course</th>
            </tr>
          </thead>

          <tbody>
            {students.map((item) => (
              <tr key={item._id}>
                
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.fatherName}</td>
                <td className="border p-2">{item.email}</td>
                <td className="border p-2">{item.mobile}</td>
                <td className="border p-2">{item.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
