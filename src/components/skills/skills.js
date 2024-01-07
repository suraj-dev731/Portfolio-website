import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import webDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
const Skills = () => {
  return (
    <section id="skills">
    <span className="skillTitle">What I do</span>
    <span className="skillDesc">Front-End Developer with a proven ability to collaborate effectively with senior developers while spending extra time to be mentored. Enjoy working closely with team members to ensure workloads are effectively redirected to bottlenecks and personally picking up the slack when necessary. With a passion for both personal growth and for software development, I also have accumulated two years of hands-on experience in front-end development, where I have consistently demonstrated my ability to create visually appealing and user-friendly interfaces. During this time, I have worked on a variety of projects that highlight my proficiency in front-end technologies and my dedication to delivering high-quality solutions
</span>
<div className="skillBars">
  <div className="skillBar">
    <img src= {UIDesign} alt="UIDesign" className="skillBarImg" />
    <div className="skillBarText">
      <h2> UI/UX Design </h2>
      <p> UI/UX design  used for creating products that are both visually appealing and user-friendly</p>
    </div>
  </div>
  <div className="skillBar">
 <img src= {webDesign} alt="webDesign" className="skillBarImg" />
    <div className="skillBarText">
      <h2> Website Design</h2>
      <p>Responsive portfolio website using HTML,CSS and Javascript
using( media query). </p>
    </div>
  </div>
  <div className="skillBar">
    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
    <div className="skillBarText">
      <h2>App Design </h2>
      <p> Using react app for app design</p>
    </div>
  </div>
</div>
     
    </section>
  );
}

export default Skills;