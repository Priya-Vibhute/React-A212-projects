import React, { useState } from "react";

function Students() {
  const [students, setStudents] = useState([
    "Nisha",
    "Anisha",
    "Manisha",
    "Nikita",
  ]);

  const [themes, setThemes] = useState([
    "warning",
    "danger",
    "primary",
    "secondary",
    "success",
  ]);

  return (
    <div>
      {/* s-array element   i-index */}
      {students.map((s, i) => (
        <li key={i}>{s}</li>
      ))}

      {themes.map((t, i) => (
        <p key={i} className={`bg-${t}`}>
          {t}
        </p>
      ))}
    </div>
  );
}

export default Students;
