import React from 'react';
import pro1 from "../images/download.jpeg"
import prop2 from "../images/234.jpeg"
import prop3 from "../images/2344.jpeg"
export default function MyProjects() {
  return (
    <section id='myprojects'>
      <div className="home-page-section">
        <div>
          <h2 className="home-page-section-title">My Projects</h2>
          <div className="home-page-projects">
            <div className="home-page-project">
              <img className="home-page-project-image"  src={pro1} alt="Project 1" />
              <h3 className="home-page-project-title">Portfolio</h3>
            </div>
            <div className="home-page-project1">
              <img className="home-page-project-image" src={prop2} alt="Project 2" />
              <h3 className="home-page-project-title">Movie rental App</h3>
            </div>
            <div className="home-page-project1">
              <img className="home-page-project-image" src={prop3} alt="Project 2" />
              <h3 className="home-page-project-title">Coffee Website</h3>
            </div>
          </div>
        </div>
       
      </div>
     
    </section>
  )
}
