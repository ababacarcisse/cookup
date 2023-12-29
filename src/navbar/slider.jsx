import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import sepa from './images/sepa.png'
import video from './images/webvideo.mp4'

export default function ImageSlider() {
  return (
    <div className="container-fluid p-0">
      <div className="row m-0">
        <div className="col-lg-6 d-flex align-items-center justify-content-center" style={{ height: '60vh' }}>
          <div>
            <h1 className="text-center" style={{ fontSize: '45px' ,padding:'50px'}}>Vos courses et repas de la semaine en 1 minute</h1>
            <button className="d-block mx-auto"
              style={{
                backgroundColor: '#FF5733',
                borderRadius: '20px',
                border: 'none',
                color: 'white',
                fontSize: '18px',
                width: '180px',
                height: '60px',
                marginBottom: '0px',
                marginLeft:'350px',
                
              }}
            >Découvrir</button>
          </div>
        </div>
        <div className="col-lg-6 bg-warning d-flex align-items-center justify-content-center p-5" style={{ height: '60vh' }}>
          <video autoPlay muted className="border border-danger rounded" style={{ maxWidth: '100%', maxHeight: '100%' }}>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <hr class="vertical-lines" style={{ 
          border: 'none',
          borderTop: '20px solid RED', // Utilisation d'une couleur rouge opaque
         width: '100%',
        margin: '0px auto' ,// Aj
        color:'red'
  }}/>
      </div>
    </div>
  );
}
