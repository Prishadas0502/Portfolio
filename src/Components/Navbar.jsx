import React from "react";
import "./Navbar.css";

function Navbar() {
  const handleLinkClick = (sectionId) => {
    // Scroll smoothly to the target section
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar fixed-top">
      <div className="navbar-brand">Prisha</div>
      <ul className="navbar-links">
        {["home", "about", "services", "portfolio", "contact"].map((section) => (
          <li key={section}>
            <button 
              onClick={() => handleLinkClick(section)} 
              className="nav-button"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
