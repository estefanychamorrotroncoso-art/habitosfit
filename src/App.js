import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Habits from "./components/Habits";
import Training from "./components/Training";
import Progress from "./components/Progress";

export default function App() {
  const [tab, setTab] = useState("habits");

  return (
    <div className="app">
      <Navbar setTab={setTab} />
      {tab === "habits" && <Habits />}
      {tab === "training" && <Training />}
      {tab === "progress" && <Progress />}
    </div>
  );
}
