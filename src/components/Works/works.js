import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';


const Works = () => {
  return (
  <section id="works">
            <h2 className="worksTitle">My portfolio</h2>
            <span className="worksDesc">As a Front-end Developer for my portfolio website, I played a pivotal role in crafting an engaging and seamless user experience. Leveraging my expertise in React, I translated design concepts into interactive and responsive web pages, ensuring a visually stunning and user-friendly presentation. Collaborating closely with the design team, I implemented cutting-edge UI components and optimized the website's performance to guarantee swift and efficient navigation. My commitment to staying abreast of industry trends enabled the integration of the latest technologies, contributing to a modern and dynamic online presence. Through meticulous attention to detail, a passion for clean code, and a user-centric approach, I successfully brought the project to life, delivering a sophisticated and intuitive interface that aligns with both aesthetic and functional objectives.</span> <br />
            <span><h3>Click on the first three projects...!</h3></span>
            <div className="worksImgs">
            <a href="https://suraj-dev731.github.io/e-commernce/"><img src={Portfolio1} alt="Portfolio 1" className="worksImg" /></a>
            <a href="https://suraj-dev731.github.io/to-list/"><img src={Portfolio2} alt="Portfolio 2" className="worksImg" /></a>
            <a href="https://suraj-dev731.github.io/calculater-app/"><img src={Portfolio3} alt="Portfolio 3" className="worksImg" /></a>
              <img src={Portfolio4} alt="" className="worksImg" />
              <img src={Portfolio5} alt="" className="worksImg" />
              <img src={Portfolio6} alt="" className="worksImg" />
            </div>
            <button className="workBtn"> See More</button>
   </section>
  )
}

export default Works;