import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail.I am proficient in HTML, CSS and JavaScript, as well as design software such as Adobe Photoshop and illustrator.</span>
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
        </div>
    </section>
  );
}

export default Skills;



