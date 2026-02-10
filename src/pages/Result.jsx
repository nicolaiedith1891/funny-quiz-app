import { Link } from "react-router-dom";

export default function Result() {
  return (
    <div>
      <h1>Result Page</h1>
      <p>Your result will appear here.</p>

      <Link to="/">Go Home</Link>
    </div>
  );
}
