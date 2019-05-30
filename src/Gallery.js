import React from 'react';

const Gallery = ({history}) =>
  <div id="gallery">
    <h1>Gallery</h1>
    <div>
      <p className="quote">"The artist is not a special kind of person; rather each person
        is a special kind of artist." - Ananda Coomaraswamy</p>
      <p>Below is a collection of pieces from my career. I experiment with a variety of
        styles and mediums, but tend to stick to acrylic, watercolor, ink, and digital
        paintings. Feel free to contact me at <i>antarticuno@gmail.com</i> if you have any
        questions about potential commissions, design work, etc.</p>
    </div>
  </div>;

function Card(props) {
  let {img, img_alt, desc} = props;
  return <div className="col-12">
    <img src={img} alt={img_alt} className="art" />
    {desc}
  </div>;
}

export default Gallery