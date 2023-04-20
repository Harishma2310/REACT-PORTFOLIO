import React from 'react'
import sampleResume from "../assets/resume.pdf";
import "../App.css";

export default function Resume() {
  return (
    <section id='resume'>
      <div className='home-page-section'>

  <div className="resume-page">
  <div>
  <h1 className="resume-page-title">Resume</h1>
  <div className="resume-page-download">
    <a href={sampleResume} download>Download Resume</a>
   </div>
  </div>
   <div className="resume-page-sample">
    <h2>Sample Resume</h2>
    <embed src={sampleResume} type="application/pdf" width="400vw" height="400px" />
  </div>
</div>
</div>
    </section>
  )
}
