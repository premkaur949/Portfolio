import React from 'react';
import './certifications.css';
import udemy from '../../assets/udemy.png';
import stanford from '../../assets/stanford.png';


const Certifications = () => {
  const blocks = [
    {
      imgSrc: udemy,
      title: 'Web Development Bootcamp',
      link: 'https://drive.google.com/file/d/1WugrrtjsJhjoM72058hFqCX1a2R8qN90/view?usp=drive_link',
      description: 'Full-stack web development course covering HTML, CSS, JavaScript, React, Node, MongoDB. Build real-world applications, implement security, and deploy projects to the cloud..',
    },
    {
      imgSrc: stanford,
      title: 'Stanford Python Code-In-Place',
      link: 'https://codeinplace.stanford.edu/cip3/certificate/jsomob',
      description: 'Stanford University’s renowned CS106A, Introduction to Python course. It emphasizes on fundamentals of programming including console programming, graphics, lists, dictionary etc.',
    },
    // {
    //   imgSrc: 'https://via.placeholder.com/300',
    //   title: 'Block Title 3',
    //   description: 'This is a small description for block 3.',
    // },
  ];

  return (
    <section id='certifications'>
        <span className='Title'>Certifications</span>
        <span className='Desc'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail.I am proficient in HTML, CSS and JavaScript, as well as design software such as Adobe Photo shop and illustrator.</span>

    <div className="blocks">
      {blocks.map((block, index) => (
        <div className="image-block" key={index}>
        <a href={block.link} target="_blank">
              <img src={block.imgSrc} alt={block.title} />
            
         
          <div className="overlay">
            <h2>{block.title}</h2>
            <p>{block.description}</p>
          
          </div>
          </a>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Certifications;
