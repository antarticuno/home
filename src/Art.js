import React from 'react';

export default function Gallery(img) {
  return <div align="start" className="card">
            <div>
              <img src={`./art/${img.img}`} alt="art" className="preview" />
            </div>
          </div>;
}
