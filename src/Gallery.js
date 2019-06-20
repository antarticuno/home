import React from 'react';
import Category from './Category';

const Gallery = ({history}) =>
  <div id="gallery">
    <h1>Gallery</h1>
    <div>
      <p className="wood-bg"><span className="quote">"The artist is not a special kind of person; rather each person
        is a special kind of artist." <br />- Ananda Coomaraswamy</span></p>
      <p>Below is a collection of pieces from my career. I experiment with a variety of
        styles and mediums, but tend to stick to acrylic, watercolor, ink, and digital
        paintings. Feel free to contact me at <i>antarticuno@gmail.com</i> if you have any
        questions about potential commissions, design work, etc.</p>
    </div>
    <Category />
  </div>;

export default Gallery