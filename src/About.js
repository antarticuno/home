import React from 'react';
import face from './img/me.jpg';
import fb from './ionicons.designerpack/logo-facebook.svg';
import insta from './ionicons.designerpack/logo-instagram.svg';
import linked from './ionicons.designerpack/logo-linkedin.svg';
import github from './ionicons.designerpack/logo-github.svg';

const About = ({history}) =>
  <div id="about">
    <div className="bio">
      <img src={face} alt="my-face"/>
      <h3>
        <a href="https://www.facebook.com/brendan.yang.754"><img className="social-img"
                                                                 src={fb}
                                                                 alt="fb"/></a>
        <a href="https://www.instagram.com/antarticuno/"><img className="social-img"
                                                              src={insta} alt="insta"/></a>
        Brendan Yang
        <a href="https://www.linkedin.com/in/yangbrendan"><img className="social-img"
                                                               src={linked} alt="linkedin"/></a>
        <a href="https://github.com/antarticuno"><img className="social-img"
                                                      src={github} alt="git"/></a>
      </h3>
      <div className="description">
        <p><span>Welcome to my portfolio!</span> I'm an artist and software engineer currently based in the Los Angeles area (previously Boston).
          Recently, I've spent the past few years developing software for the clinical trial industry. It has been incredibly
          rewarding, especially because of its importance in advancing global health.
        </p>
        <p>Outside of work, I enjoy drawing and painting, and just generally experimenting with a variety of mediums.
          I can often be found doodling on my tablet, or scribbling away in my journal. Additionally, I love to take inspiration
          from board games and video games - which has developed into a healthy obsession for games like Magic the Gathering
          and Dungeons and Dragons. Feel free to peruse some of my work - I do take commissions from time to time.</p>
        <p>You can reach me at <em><a href="mailto:antarticuno@gmail.com">antarticuno@gmail.com</a></em> if you have any
          questions, or would like to contact me about job opportunities/commissions, etc.</p>
      </div>
    </div>
  </div>;

export default About