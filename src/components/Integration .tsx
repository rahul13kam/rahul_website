"use client";

import { useState } from "react";

type Student = {
  id?: number;
  name: string;
  age: number;
  course: string;
};

export default function Integration() {
  const [students, setStudents] = useState<Student[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔵 Load Students
  const loadStudents = async () => {
    setLoading(true);
    const res = await fetch("https://nestapi-3sbs.onrender.com/students/");
    const data = await res.json();
    setStudents(data);
    setLoading(false);
  };

  // 🟢 Add One Student
  const addStudent = async () => {
    await fetch("https://nestapi-3sbs.onrender.com/students/bulk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        {
          name: name,
          age: Number(age),
          course: course,
        },
      ]),
    });

    alert("Student Added ✅");

    setName("");
    setAge("");
    setCourse("");

    loadStudents(); // reload list
  };

  return (
    <div className="p-10">

      <h2 className="text-2xl font-bold mb-6">Student Form</h2>

      {/* Input Fields */}
      <input
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
      />

      <input
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="border p-2 mr-2"
      />

      <input
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        className="border p-2 mr-2"
      />

      <button
        onClick={addStudent}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Student
      </button>

      <hr className="my-6" />

      {/* Load Button */}
      <button
        onClick={loadStudents}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Loading..." : "Load Students"}
      </button>

      {/* Student List */}
      <div className="mt-6">
        {students.map((student) => (
          <div key={student.id} className="border p-4 mb-3">
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>
          </div>
        ))}
      </div>
    </div>
  );
}