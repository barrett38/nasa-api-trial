import React, { useState } from "react";
import "./Header.css";
import useNasaPhoto from "../../hooks/useNasaPhoto";
import downloadImage from "../../utils/downloadImage";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const backgroundImage = useNasaPhoto();

  const handleDownload = () => {
    downloadImage(backgroundImage, "nasa_photo_of_the_day.jpg");
  };

  return (
    <header className="top-header">
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={`menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#about">ABOUT ME</a>
          </li>
          <li>
            <a href="#whatIDo">WHAT I DO</a>
          </li>
          <li>
            <a href="#leadership">LEADERSHIP & MANAGEMENT</a>
          </li>
          <li>
            <a href="#contact" onClick={handleDownload}>
              DOWNLOAD IMAGE
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
