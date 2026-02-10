import { useEffect } from "react";
import reactLogo from "../assets/yippee-cat-kitty.gif";

export default function Result() {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.innerText = "❤️";
      heart.className = "heart";
      heart.style.left = Math.random() * window.innerWidth + "px";
      heart.style.animationDuration = 2 + Math.random() * 2 + "s";
      heart.style.fontSize = 20 + Math.random() * 30 + "px";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 4000);
    };

    const interval = setInterval(createHeart, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <h1>yaaaaaaaaaay</h1>
      <p>I love You too manika</p>
      <img src={reactLogo} />
      <p style={{ marginTop: "20px", fontStyle: "italic", maxWidth: "400px" }}>
        u make me the haappiest boi in the world !!!!
      </p>

      <div className="hearts"></div>
    </div>
  );
}
