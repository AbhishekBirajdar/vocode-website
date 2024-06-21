import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main className="main-content">
      <h1 className="main-header">Welcome to Vocode</h1>
      <p>Here you can find information about our telephony system, how to create your own agents, and how to connect them.</p>
      <h2 className="sub-header">Why I'm the Best Candidate for Vocode</h2>
      <p>
        With a Master of Science in Computer Science and a Bachelor of Engineering in Electronics and Telecommunication, I bring a solid academic foundation paired with practical experience in AI, machine learning, and software engineering. My professional journey includes roles at RoundTechSquare, HP Tech Ventures, and Accenture, where I've designed scalable architectures, developed AI-driven systems, and led end-to-end project implementations.
      </p>
      <p>
        My technical skills span across programming languages like Python, Java, C++, and R, and tools like TensorFlow, Keras, PyTorch, and Apache Spark. I have a proven track record of improving system efficiencies and recommendation accuracies, and my projects have significantly enhanced client satisfaction and operational efficiency. My ability to lead and collaborate effectively in agile environments makes me a strong fit for Vocode.
      </p>
      <h2 className="sub-header">Find More About Me</h2>
      <div className="link-container">
        <a href="https://www.linkedin.com/in/your-profile" className="nav-link" target="_blank" rel="noopener noreferrer">My LinkedIn</a>
        <a href="path/to/your/resume.pdf" className="nav-link" download>Download My Resume</a>
        <a href="https://www.yourwebsite.com" className="nav-link" target="_blank" rel="noopener noreferrer">My Personal Website</a>
      </div>
      <h2 className="sub-header">Pages</h2>
      <div className="button-container">
        <Link to="/telephony" className="nav-button">Telephony</Link>
        <Link to="/create-agent" className="nav-button">Create Your Own Page</Link>
        <Link to="/connecting-agent" className="nav-button">Connecting Your Agent</Link>
      </div>
    </main>
  );
};

export default HomePage;
