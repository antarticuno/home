import React from 'react';
import face from './me.JPG';
import fb from './ionicons.designerpack/logo-facebook.svg';
import insta from './ionicons.designerpack/logo-instagram.svg';
import linked from './ionicons.designerpack/logo-linkedin.svg';
import github from './ionicons.designerpack/logo-github.svg';

const About = ({history}) =>
  <div id="about">
    <div>
      <div class="bio">
        <p><img src={face} alt="my-face"/></p>
        <h3>
          <a href=""><img className="social-img" src={fb} alt="fb" /></a>&nbsp;
          <a href=""><img className="social-img"  src={insta} /></a>&nbsp;
          Brendan Yang&nbsp;
          <a href=""><img className="social-img"  src={linked} /></a>&nbsp;
          <a href=""><img className="social-img"  src={github} /></a>
        </h3>
        <p><span>Hi!</span>I am a recent graduate of Northeastern University, from which I
          earned a
          combined degree in Biology and Computer Science. During my time at Northeastern
          I
          cultivated my love for both research and software development and have a
          sampling
          of experience in both. I completed two co-ops, one at a cutting-edge research
          company, Editas Medicine, and the other at a leading health insurance company,
          Cigna. I also have some experience in academia, as I volunteered in the Godoy
          microbiology laboratory.
        </p>
        <p>Outside of my academic interests, I love to paint and design things. This
          leaches
          into a lot of my other hobbies which include makeup, baking, and web design. I
          also love to play tabletop board and card games including the increasingly
          popular
          game, Magic the Gathering.</p>
        <p>Feel free to reach me at <i>antarticuno@gmail.com</i> if you have any
          questions,
          or would like to contact me about job opportunities/commissions, etc. I look
          forward to speaking with you!</p>
      </div>
    </div>
  </div>;

export default About