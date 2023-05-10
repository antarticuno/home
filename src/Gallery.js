import React from 'react';
import Art from './Art';

const Gallery = () =>
  <div id="gallery">
      <section className="gallery-bg">
          <h1>Gallery</h1>
      </section>
    <div id="categories-content">
      <div className="content">
        <p>Below you&apos;ll find a collection of digital illustrations and sketches completed recently. Dinosaurs, fantasy characters, and portraits tend to be my common interests :)</p>
        <div className="card-deck">
          <Art img={"antarticuno-playmat.png"} />
        </div>
        <div className="card-deck">
          <Art img={"brachio.png"} />
          <Art img={"spino.png"} />
        </div>
        <div className="card-deck">
          <Art img={"pteros.png"} />
          <Art img={"trexy.png"} />
        </div>
        <div className="card-deck">
          <Art img={"dinovember_w1.png"} />
        </div>
        <div className="card-deck">
          <Art img={"dinovember_w1 2.png"} />
          <Art img={"dinovember_w1 3.png"} />
        </div>
        <div className="card-deck">
          <Art img={"dinovemberw2.png"} />
          <Art img={"dinovemberw2 2.png"} />
        </div>
        <div className="card-deck">
          <Art img={"dinovemberw2 3.png"} />
          <Art img={"dinovemberw2 4.png"} />
        </div>
        <div className="card-deck">
          <Art img={"dinovemberw4.png"} />
          <Art img={"dinovemberw4 2.png"} />
        </div>
        <div className="card-deck">
          <Art img={"lorraine.png"} />
          <Art img={"bethany.png"} />
        </div>
        <div className="card-deck">
          <Art img={"emily.png"} />
          <Art img={"man.png"} />
        </div>
      </div>
    </div>
  </div>;

export default Gallery