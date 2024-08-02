import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';
import GithubIcon from '../../assets/github.png';
import LinkedInIcon from '../../assets/linkedin.webp';

const Contact = () => {
  // const form =  useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_c2mb7r4', 'template_5ljx8rq', form.current, 'bBO7nnp8Kb1iGCvJ9A-Lm')
  //       .then((result) => {
  //         console.log(result.text);
  //         e.target.reset();
  //         alert('Email Sent!');
  //       },  (error) => {
  //         console.log(error.text);
  //       });
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c2mb7r4', 'template_5ljx8rq', form.current, {
        publicKey: 'fgfEdEjT34s2xkFYF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <section id='contactPage'>

    <div id='contact'>
        <h1 className='contactPageTitle'> Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='from_name' />
            <input type='email' className='email' placeholder='Your Email' name='from_email' />
            <textarea className='msg' name='message' rows={5} placeholder='Your Message'></textarea>
            <button type='submit' value='send' className='submitBtn'>Submit</button>
            <div className='links'>
               <a href='https://github.com/premkaur949' ><img src={GithubIcon} alt='Github' className='link' /></a>
               <a href='https://www.linkedin.com/in/prem-kaur-722279230/' ><img src={LinkedInIcon} alt='LinkedIn' className='link' /></a>
               <a href='https://www.youtube.com/channel/UCNxlaPefDMIZ381KpNV_0Vg' ><img src={YouTubeIcon} alt='Youtube' className='link' /></a>
               <a href='' ><img src={InstagramIcon} alt='' className='link' /></a>
            </div>
        </form>
    </div>

    </section>
  )
}

export default Contact;