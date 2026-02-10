import { Link } from "react-router-dom";
import reactGif from "../assets/cat-cat-love.gif";

export default function Welcome() {
  return (
    <div className="page">
      <h1>Hi Dilmani</h1>
      <p>Answer honestly. Or try.</p>

      <img src={reactGif} style={{ maxWidth: "400px" }} />

      <br /><br />
      <Link to="/question">
        <button className="yes-btn" style={{ padding: "15px 30px", fontSize: "18px" }}>
          Hi !
        </button>
      </Link>
    </div>
  );
}
