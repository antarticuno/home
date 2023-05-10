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
          <Art img={"brachio.PNG"} />
          <Art img={"spino.PNG"} />
        </div>
        <div className="card-deck">
          <Art img={"pteros.PNG"} />
          <Art img={"trexy.PNG"} />
        </div>
        <div className="card-deck">
          <Art img={"dinovember_w1.PNG"} />
        </div>
        <div className="card-deck">
          <Art img={"dinovember_w1 2.PNG"} />
          <Art img={"dinovember_w1 3.PNG"} />
        </div>
        <div className="card-deck">
          <Art img={"dinovemberw2.PNG"} />
          <Art img={"dinovemberw2 2.PNG"} />
        </div>
        <div className="card-deck">
          <Art img={"dinovemberw2 3.PNG"} />
          <Art img={"dinovemberw2 4.PNG"} />
        </div>
        <div className="card-deck">
          <Art img={"dinovemberw4.PNG"} />
          <Art img={"dinovemberw4 2.PNG"} />
        </div>
        <div className="card-deck">
          <Art img={"lorraine.PNG"} />
          <Art img={"bethany.PNG"} />
        </div>
        <div className="card-deck">
          <Art img={"emily.PNG"} />
          <Art img={"man.PNG"} />
        </div>
      </div>
    </div>
  </div>;

export default Gallery