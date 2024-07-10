import React, { useState } from 'react';
import './menu.css';
import menu from '../../assets/menu.png';
import {Link} from 'react-scroll';


const Menu = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [showMenu, setShowMenu] = useState(false);

  // const toggleMenu = () => {
  //   setShowMenu(!showMenu);
  // };
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div className="hamburger-menu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      <div className={`menu-icon ${isHovered ? 'open' : ''}`}>
      
         <img src={menu} alt='menu'></img>
      </div>
      {/* <div className={`menu-options ${isHovered ? 'show' : ''}`}>
        <a href="#intro" activeClass='act'  spy={true} smooth={true} offset={-100} duration={500} className='item' onClick={()=>setIsHovered(false)}>Option 1</a>
        <a href="#skills" activeClass='act'  spy={true} smooth={true} offset={-100} duration={500} className='item' onClick={()=>setIsHovered(false)}>Option 2</a>
        <a href="#contact" activeClass='act'  spy={true} smooth={true} offset={-100} duration={500} className='item' onClick={()=>setIsHovered(false)}>Option 3</a>
      </div> */}
      
      <div className={`menu-options ${isHovered ? 'show' : ''}`}>
     
      {/* <div className='menu-options' style={{display: showMenu? 'flex':'none'}}> */}
                <Link activeClass='act' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='item' onClick={()=>setIsHovered(false)}>Home</Link>
                <Link activeClass='act' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='item' onClick={()=>setIsHovered(false)}>About</Link>
                <Link activeClass='act' to='works' spy={true} smooth={true} offset={-50} duration={500} className='item' onClick={()=>setIsHovered(false)}>Portfolio</Link>
                <Link activeClass='act' to='certifications' spy={true} smooth={true} offset={-50} duration={500} className='item' onClick={()=>setIsHovered(false)}>Certifications</Link>
                <Link activeClass='act' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='item' onClick={()=>setIsHovered(false)}>Contact</Link>
            </div>
    </div>
  );
};

export default Menu;
