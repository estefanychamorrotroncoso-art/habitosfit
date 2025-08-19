import React, { useState } from "react";

export default function Habits() {
  const [habits, setHabits] = useState(["Beber agua", "Dormir 8h", "Caminar 30 min"]);

  return (
    <div>
      <h2>Mis Hábitos</h2>
      <ul>
        {habits.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </div>
  );
}
