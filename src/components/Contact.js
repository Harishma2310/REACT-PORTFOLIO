import React from 'react';
import '../App.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
export default function Contacts() {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <form action="#">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.." required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email.." required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="Subject.." required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Write something.." required></textarea>

          
        </form>
        <input type="submit" value="Send" />
      </div><br/><br/>
      <div className="social-icons">
          
          <div className='inner-icons'>
          <a href="https://www.linkedin.com/in/harishma-ramesh-177b8523a" >
               <FaLinkedin size={28} />
             </a>
             <a href="https://github.com/Harishma2310" >
               <FaGithub size={28} />
             </a>
             <a href="https://github.com/Harishma2310" >
               <FaInstagram size={28} />
             </a>
          </div>
           </div>
    </section>
  );
}
