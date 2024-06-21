import React from 'react';
import './certifications.css';

const Certifications = () => {
  const blocks = [
    {
      imgSrc: 'https://via.placeholder.com/300',
      title: 'Block Title 1',
      description: 'This is a small description for block 1.',
    },
    {
      imgSrc: 'https://via.placeholder.com/300',
      title: 'Block Title 2',
      description: 'This is a small description for block 2.',
    },
    {
      imgSrc: 'https://via.placeholder.com/300',
      title: 'Block Title 3',
      description: 'This is a small description for block 3.',
    },
  ];

  return (
    <section id='certi'>
        <span className='certiTitle'>Certifications</span>
        <span className='certiDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail.I am proficient in HTML, CSS and JavaScript, as well as design software such as Adobe Photoshop and illustrator.</span>

    <div className="blocks">
      {blocks.map((block, index) => (
        <div className="image-block" key={index}>
          <img src={block.imgSrc} alt={block.title} />
          <div className="overlay">
            <h2>{block.title}</h2>
            <p>{block.description}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Certifications;
