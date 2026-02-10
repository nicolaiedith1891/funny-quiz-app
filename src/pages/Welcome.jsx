import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <h1>Welcome Page</h1>
      <p>This is the start of the quiz.</p>
      <Link to="/question">Start Quiz</Link>
    </div>
  );
}
