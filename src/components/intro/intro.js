import React from 'react'
import './intro.css';
import bg from '../../assets/photo.png';
import btnImg from '../../assets/hireme.png';
import  {Link}  from 'react-scroll';

const Intro = () => {
  return (
   <section id="intro">
    <div className="introContent">

<span className="hello">Hello,</span>
<span className="introText">I'm <span className="introName">Suraj</span> <br /> front-end developer</span>
<p className="introPara">I am a skilled front-end developer with experience in creating <br /> visual appealing and user friendly websites</p>
<Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg' />Hire Me</button></Link>
    </div>
    <img src={bg} alt="Profile" className="bg" />
   </section>
  )
}

export default Intro;