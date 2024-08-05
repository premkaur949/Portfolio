import React, { useState } from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


const Skills = () => {
    const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am a web developer with a keen eye for creating visually appealing websites. My journey began with a passion for creativity and user-centric design, starting with UX design and evolving into the technical realm of web development. This blend of creativity and technology drives my work in website design. As I continue to grow in this industry, I am dedicated to learning and improving my skills to craft engaging and effective digital experiences.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>I'm working on my skills in UX/UI design, focusing on creating user interfaces that are both intuitive and visually engaging. My goal is to enhance user interactions by learning how to balance functionality with visual appeal.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Website Design</h2>
                    <p>As a website designer, learning to build responsive and aesthetically pleasing sites. I’m working on creating designs that not only look great but also provide a smooth and accessible user experience.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>As I dive into app design, I’m learning to craft interfaces that offer both usability and a positive user experience. My focus is on developing designs that are functional and enjoyable to interact with. </p>
                </div>
            </div>
            {showMore && (
          <div className='extraSkills'>
            <div className='skillBox'>
              <h2>Java programming</h2>
            </div>
            <div className='skillBox'>
              <h2>HTML-CSS-Javascript</h2>
            </div>
            <div className='skillBox'>
              <h2>Python programming</h2>
            </div>
            <div className='skillBox'>
              <h2>DBMS</h2>
            </div>
            <div className='skillBox'>
              <h2>React.js Framework</h2>
            </div>
        
            <div className='skillBox'>
              <h2>MySQL</h2>
            </div>
            <div className='skillBox'>
              <h2>Figma</h2>
            </div>
            <div className='skillBox'>
              <h2>Embedded Systems</h2>
            </div>
            <div className='skillBox'>
              <h2>Canva</h2>
            </div>
            <div className='skillBox'>
              <h2>Software Engineering</h2>
            </div>
            <div className='skillBox'>
              <h2>Computer Networks</h2>
            </div>
            <div className='skillBox'>
              <h2>Data Structures & Algorithms</h2>
            </div>
          </div>
        )}
      </div>
      <button className='showMoreBtn' onClick={toggleShowMore}>
      {showMore ? 'Show Less' : 'Show More'}
      </button>
    </section>
  );
}

export default Skills;