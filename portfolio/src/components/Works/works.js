import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
import parallax from '../../assets/parallax.png';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in my attention to detail, ensuring that every project is an opportunity for me to pixel-perfect my work. Through working on various small projects, I have steadily built my skills and experience to where they are today. I am excited to continue growing and making a positive impact in the industry</span>
        <br></br><div className='worksImgs'>
            <img src={parallax} alt='Parallax Website Design' className='worksImg' href="https://premkaur949.netlify.app/"/>
            <img src={Portfolio2} alt='' className='worksImg' />
            <img src={Portfolio3} alt='' className='worksImg' />
            <img src={Portfolio4} alt='' className='worksImg' />
            <img src={Portfolio5} alt='' className='worksImg' />
            <img src={Portfolio6} alt='' className='worksImg' />
        </div>
        <button className='worksBtn'>See More</button>
    </section>
  )
}

export default Works;
