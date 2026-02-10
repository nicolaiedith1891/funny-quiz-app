import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Question() {
  const [yesSize, setYesSize] = useState(1);
  const [noPos, setNoPos] = useState({ x: 200, y: 200 });
  const navigate = useNavigate();

  function moveNoRandomly() {
    const padding = 100; // keep button inside screen
    const x = Math.random() * (window.innerWidth - padding);
    const y = Math.random() * (window.innerHeight - padding);
    setNoPos({ x, y });
  }

  function handleNo() {
    setYesSize(prev => prev * 1.3);
    moveNoRandomly();
  }

  function handleYes() {
    navigate("/result");
  }

  // move NO once on page load
  useEffect(() => {
    moveNoRandomly();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Do you like React?</h1>

      {/* YES BUTTON */}
      <button
        onClick={handleYes}
        style={{
          transform: `scale(${yesSize})`,
          padding: "15px 30px",
          fontSize: "18px",
          transition: "0.3s",
          zIndex: 2
        }}
      >
        YES
      </button>

      {/* NO BUTTON (free roaming) */}
      <button
        onClick={handleNo}
        style={{
          position: "fixed",
          left: noPos.x,
          top: noPos.y,
          padding: "15px 30px",
          fontSize: "18px",
          transition: "0.2s",
          zIndex: 3
        }}
      >
        NO
      </button>
    </div>
  );
}
