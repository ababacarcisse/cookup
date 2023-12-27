import React from "react";
import { Carousel } from 'react-bootstrap';
import cover from './images/cover.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import sepa from './images/sepa.png'

export default function ImageSlider() {
  return (
    <>
    <div>
    <div className="row" style={{height:'600px'}}>
        <div className="col-6">
          <h1 className="text-center" style={{padding:'200px',fontSize:'50px'}}>Vos courses et repas de la semaine en 1 minute</h1>
          <button style={{backgroundColor:'#FF5733',borderRadius:'20px', border:'none',color:'white',fontSize: '20px',width:'150px',height:'50px',marginBottom:'0px'}}   >Decouvrir</button>
        </div>
        <div className="col-6 bg-warning" >
          
        </div>
        <img src={sepa} className='img-fluid' style={{width:'100%'}}></img>
 
      </div>
    </div>
      
    </>
  );
}
