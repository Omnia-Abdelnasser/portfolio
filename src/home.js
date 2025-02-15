import React from 'react';
import img1 from './image/WhatsApp Image 2025-02-04 at 19.19.31_bfa7c352.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Home = () => {
  return (
    <div className="home">
      <h5>Hello, I'm</h5>
      <h2>Omniya Abdelnasser</h2>
      <h4>Front-End Developer</h4>
      <img src={img1} alt="Profile Picture" />

      <div className="social-icons">
        <a href="#" target="_blank"><i className="fab fa-facebook"></i></a>
        <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
        <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a href="#" target="_blank"><i className="fab fa-github"></i></a>
      </div>
    </div>
  );
};

export default Home;
