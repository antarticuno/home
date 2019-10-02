import React from 'react';
import Category from './Category';

const Gallery = ({history}) =>
  <div id="gallery">
    <h1>Gallery</h1>
    <div>
      <p className="wood-bg"><span className="quote">"The artist is not a special kind of person; rather each person
        is a special kind of artist." <br />- Ananda Coomaraswamy</span></p>
    </div>
    <Category />
  </div>;

export default Gallery