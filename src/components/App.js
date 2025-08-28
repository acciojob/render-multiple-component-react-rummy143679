import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {

  const projects = [
    {
      name: "AI Sports Reel Generator",
      description: "An AI-powered app that generates sports celebrity history reels with a TikTok-style UI."
    },
    {
      name: "Smart Inventory System",
      description: "A real-time inventory and supply chain management system using IoT and AI."
    },
    {
      name: "Health Tracker App",
      description: "A mobile app that monitors fitness, diet, and mental health using AI insights."
    }
  ];

  return (
    <div id="main">
        {projects.map((project, index) => (
          <div className="ns-wrapper" key={index}>
            <h1 data-ns-test="project-name">{project.name}</h1>
            <h6 data-ns-test="project-description">{project.description}</h6>
          </div>
        ))}
    </div>
  );
}


export default App;
