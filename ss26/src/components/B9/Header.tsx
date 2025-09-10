import { Link } from "react-router-dom";

export default function Headers() {
  return (
    <header style={{ padding: "10px", background: " #0000FF" }}>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/post">Post</Link>
      </nav>
    </header>
  );
}
