import React from "react";
import "./Header.css";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="header-left" onClick={refreshPage}>
        규뚱
      </div>
      <div className="header-right">
        <nav className="nav">
          <button
            className="nav-button"
            onClick={() => scrollToSection("about")}
          >
            자기소개
          </button>
          <button
            className="nav-button"
            onClick={() => scrollToSection("project")}
          >
            프로젝트
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
