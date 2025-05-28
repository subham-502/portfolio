import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="modern2025-footer">
      <div className="modern2025-footer-hr"></div>
      <p className="modern2025-footer-text">
        <span role="img" aria-label="sparkles">✨</span>
        Thank you for visiting my portfolio website!
        <span role="img" aria-label="wave">👋</span>
      </p>
      <br></br>
      Hope to see you again soon!
      <p className="modern2025-footer-credit">
        &copy; {new Date().getFullYear()} SUBHAM BASUMATARY | All rights reserved.
      </p>
    </footer>
  );
}
