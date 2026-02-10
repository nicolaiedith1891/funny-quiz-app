import reactLogo from "../assets/react-logo.png";

export default function Result() {
  return (
    <div className="page">
      <h1>You had no choice.</h1>
      <p>React has claimed another developer.</p>

      <img src={reactLogo} width="200" />

      <p style={{ marginTop: "20px", fontStyle: "italic" }}>
        Resistance was statistically insignificant.
      </p>
    </div>
  );
}
