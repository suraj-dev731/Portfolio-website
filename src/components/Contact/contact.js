import React, { useRef } from 'react';
import './contact.css';
import Pracoda from '../../assets/pracoda.png';
import Nexito from '../../assets/nexito.jpg';
import facebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import YoutubeIcon from '../../assets/youtube.png';
import LinkdinIcon from '../../assets/linkdin.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mn90wyi', 'template_c8q5vjq', form.current, 't7B37FQ4Qe1MuGEx7')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('email sent !');
      }).catch ((error) => {
          console.error('email sending error:',error);
      });
  };

  return (
    <section id="contactPage">
      <div className="clients">
       <h1 className="contactPageTitle">My Clients</h1>
       <p className="clientDesc"> I have had the opportunity to work with a two of companies. Some of  the notable companies I have worked with includes </p>
       <div className="clientImgs">
        <img src={Pracoda} alt="Client" className="clientImg" />
        <img src={Nexito} alt="Client" className="clientImg" />
       </div>

      </div>
      <div id="contact">
<h1 className="contactPageTitle"> Contact Me</h1>
<span className="contactDesc"> Please fill out the form below to discuss any work opportunities</span>

<form  className="contactForm" ref={form} onSubmit={sendEmail}>
  <input type="text" className="name" placeholder='Your Name' name='your_name'/>
  <input type="email" className="email" placeholder='Your Email' name='your_email'/>
  <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
  <button type='submit' value='send' className="submitBtn">submit</button>
  <div className="links">
    <img src={facebookIcon} alt="facebook" className="link" />
    <img src={InstagramIcon} alt="instagram" className="link" />
    <img src={YoutubeIcon} alt="youtube" className="link" />
    <img src={LinkdinIcon} alt="linkdin" className="link" />
  </div>
</form>
      </div>
    </section>
  )
}

export default Contact;