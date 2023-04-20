import React from 'react';
import pro1 from "../images/img1.jpeg"
import prop2 from "../images/img2.jpeg"
export default function Projects() {
  return (
    <section id='projects'>
      <div className="home-page-section">
        <div>
          <h2 className="home-page-section-title">Achievements</h2>
          <div className="home-page-projects">
            <div className="home-page-project">
              <img className="home-page-project-image"  src={pro1} alt="Project 1" />
              <h3 className="home-page-project-title">InnoHacks</h3>
              <p className="home-page-project-description">Selected in Top 30, held at KIET, Ghaziabad</p>
            </div>
            <div className="home-page-project1">
              <img className="home-page-project-image" src={prop2} alt="Project 2" />
              <h3 className="home-page-project-title">Ideathon</h3>
              <p className="home-page-project-description">Selected in Top 20, held at SKCET, Coimbatore</p>
            </div>
          </div>
        </div>
       
      </div>
     
    </section>
  )
}
