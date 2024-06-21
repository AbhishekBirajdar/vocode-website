import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="./logo.png" alt="Vocode Logo" />
      </div>
      <nav>
        <a href="https://www.linkedin.com/in/abhishek-birajdar-987aa9184/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="./Abhishek_Birajdar_Resume_2025.pdf" download="Abhishek_Resume.pdf">Resume</a>
        <a href="https://www.birajdar.tech/" target="_blank" rel="noopener noreferrer">Portfolio</a>
        <a href="https://docs.vocode.dev/welcome">Documentation</a>
        <a href="https://docs.vocode.dev/api-reference/numbers/list-numbers">API Reference</a>
        <a href="https://docs.vocode.dev/open-source/what-is-vocode">Open Source</a>
        <a href="mailto:acbirajdar@csuchico.edu">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
