import React from 'react'
import pic from "../images/about.png";
import '../App.css';

export default function About() {
  return (
    <section id='about'>
      <div className="fade-in">
        <div className="home-page-section">
          
          <div className="fade-in">
            <h2 className="home-page-section-title" style={{ fontSize: "2.1em"}}>Know Who I'M</h2>
            <p className="home-page-section-description fade-in">
              <p>
                Hi Everyone, I am <p style={{color:'rgb(255, 60, 252)',fontSize:'1.6em'}}>HARISHMA R</p> from coimbatore, TamilNadu.
                <br/>
                I am  pursuing B.E in Electronics and communication in Sri krishna college of enginerinf and technology
              </p>
              <p>Apart from coding, some other activities that I love to do!</p>
              <ol>
                <li>Playing Games</li>
                <li>Writing Tech Blogs</li>
                <li>Travelling</li>
              </ol>
              <br/>
              "Strive to build things that make a difference!"<br/>
              -Harishma
            </p>
          </div>

          <div className="fade-in">
            <img src={pic} className='image-about' />
          </div>

        </div>
      </div>
    </section>
  )
}
