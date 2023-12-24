import img1 from './images/1.webp';
import img2 from './images/2.webp';

export default function Grid() {
  const imgStyle = {
    maxWidth: '100%', // Set a maximum width for the images
    maxHeight: '300px', // Set a maximum height for the images
    width: 'auto', // Allow the width to adjust automatically based on the height
    height: 'auto', // Allow the height to adjust automatically based on the width
  };

  return (
      <>
      <div className="container-fluid rounded" style={{ backgroundColor: 'green', width: '60%', height: 'auto' }}>
      <p className="text-center text-light mt-4 p-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing <br />
        elit. Excepturi perspiciatis eligendi iste veritatis similique harum aut!
      </p>
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={img1} alt="" style={imgStyle} className="img-fluid" />
          <p className="text-center text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Omnis illo voluptate deserunt rerum soluta?
          </p>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <img src={img2} alt="" style={imgStyle} className="img-fluid" />
          <p className="text-center text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Omnis illo voluptate deserunt rerum soluta?
          </p>
        </div>
      </div>
      <p className="text-center text-light mt-4 p-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing <br />
        elit. Excepturi perspiciatis eligendi iste veritatis similique harum aut!
      </p>
    </div>
    <div className="container">
      <h3 className="mx-lg-5 ml-5">Pour ne rien manquer des nouveautés</h3>
     
      <input className='mx-lg-5 ml-5  w-40' type='text'></input>
      <button className='btn btn-success'>sabonner</button>

     
      
    </div>
          </>    
   
  );
}
