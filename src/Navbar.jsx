import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <img src="/logo-carpool.png"></img>
          <span className="brand">UrbanPool</span>
        </div>

        <ul className="nav-center">
          <li className="active">Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="nav-right">
          <span className="login">Log In</span>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
