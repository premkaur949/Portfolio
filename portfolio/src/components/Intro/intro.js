import React from 'react';
import './intro.css';
import bg from '../../assets/image (2).png';
import btnImg from '../../assets/doc.png';

import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
          <span className='hello'> Hello,</span>
          <span className='introText'>I'm<span className='introName'> Prem Kaur,</span><br/>Website Designer</span>
          <p className='introPara'> I am a skilled web developer with experience in creating<br/> visually appealing websites</p>
          <a href="https://drive.google.com/file/d/11iROZB1L4cQEDziO3TamDMoyIOcie5zj/view?usp=drive_link" target="_blank" >
          <button className='btn'><img src={btnImg} alt='' className='btnImg'/>Resume</button></a>
        </div>
        <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro;
