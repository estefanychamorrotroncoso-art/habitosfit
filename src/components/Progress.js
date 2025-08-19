import React, { useState } from "react";

export default function Progress() {
  const [notes, setNotes] = useState("");

  return (
    <div>
      <h2>Progreso</h2>
      <textarea
        placeholder="Escribe cómo te sentiste hoy..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <p>{notes && "✅ Guardado en memoria local"}</p>
    </div>
  );
}
