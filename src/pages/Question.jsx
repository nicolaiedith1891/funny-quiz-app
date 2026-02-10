import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import brainGif from "../assets/brain.gif";

export default function Question() {
  const [yesSize, setYesSize] = useState(1);
  const [noPos, setNoPos] = useState({ x: 200, y: 200 });
  const navigate = useNavigate();

  function moveNoRandomly() {
    const padding = 120;
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

  useEffect(() => {
    moveNoRandomly();
  }, []);

  useEffect(() => {
    if (yesSize > 4) {
        document.body.style.background = "black";
    }
    }, [yesSize]);

  return (
    <div className="page">
      <h1>Do you like React?</h1>

      <button
        onClick={handleYes}
        className="yes-btn"
        style={{
          transform: `scale(${yesSize})`,
          padding: "15px 30px",
          fontSize: "20px",
          transition: "0.3s",
          zIndex: 2
        }}
      >
        YES
      </button>

      <button
        onClick={handleNo}
        className="no-btn"
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

      <img src={brainGif} className="meme-gif" />
    </div>
  );
}
