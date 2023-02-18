import React from "react";

const students = [
    {
        id: 8,
        name: "Pedri",
    }, 
    {
        id: 6,
        name: "Gavi",
    },
    {
        id: 5,
        name: "Sergio",
    },
    {
        id: 21,
        name: "Frenkie",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={`student-id-${student.id}`}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;