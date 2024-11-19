import { Link } from "react-router-dom";
import TopicsList from "../Topics/TopicsList.tsx";
import "./Styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        NC News
      </Link>
      <TopicsList />
    </nav>
  );
}
