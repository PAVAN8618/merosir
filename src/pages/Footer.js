import React from "react";
import "./footer.css"; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} &copy;Pavan Kumar. All rights
          reserved.
        </p>
        <ul className="footer-links">
          <li>
            <a href="#privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="#terms">Terms of Service</a>
          </li>
          <li>
            <a href="#contact">Contact Us- 8618424406</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
