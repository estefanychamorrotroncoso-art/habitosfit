import React from "react";

export default function Navbar({ setTab }) {
  return (
    <nav className="navbar">
      <button onClick={() => setTab("habits")}>Hábitos</button>
      <button onClick={() => setTab("training")}>Entrenamiento</button>
      <button onClick={() => setTab("progress")}>Progreso</button>
    </nav>
  );
}
