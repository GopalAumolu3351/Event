


import React from "react";
import "./App.css";

function App() {
  const links = [
    { name: "Haldi Mehendi", url: "https://support2.fromsmash.com/Anuhya-and-Vardhan-Haldi-Mehendi" },
    { name: "Pasupu Function", url: "https://support2.fromsmash.com/Anuhya-and-Vardhan-Paspu" },
    { name: "Pellikoduku", url: "https://support2.fromsmash.com/Anuhya-Vardhan-Pellikoduku" },
    { name: "Pellikuthuru", url: "https://support2.fromsmash.com/Anuhya-and-Vardhan-Pellikuthuru" },
    { name: "Engagement", url: "https://support2.fromsmash.com/Anuhya-and-Vardhan-Engagement"},
    { name: "Sangeeth", url: "https://support2.fromsmash.com/Anuhya-and-Vardhan-Sangeet"},
    { name: "Wedding", url: "https://support2.fromsmash.com/Anuhay-and-Vardahn-Wedding"},
    { name: "Vratham", url: "https://support2.fromsmash.com/Anuhya-Vardhan-Vratham"},
    { name: "Reception", url: "https://support2.fromsmash.com/Anuhya-and-Vardha-Reception" }
  ];

  return (
    <div className="container">
      <h1 className="title">Vardhan-Anuhya</h1>

      <div className="links-grid">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="event-card"
          >
            <span className="event-name">{link.name}</span>
            <span className="arrow">➜</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;