import tel from './images/tele.png';
import line from './images/line.png';

export default function How() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: '#075526' }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-5 d-flex justify-content-center">
            <img src={tel} style={{ width: '68%' ,padding:'50px'}} alt="Telephone" />
          </div>
          <div className="col-sm-7">
            <div className="p-4">
              <h2 className="text-light mb-5" ><b>Comment ça marche ?</b></h2>
              <h5 className="text-light " style={{marginBottom:'50px'}}>Dites-nous qui vous êtes : votre foyer, vos régimes alimentaires,<br /> votre équipement de cuisine.</h5>
              <h5 className="text-light " style={{marginBottom:'50px'}}>Jow recommande le menu qui vous ressemble.</h5>
              <h5 className="text-light" style={{marginBottom:'50px'}}>Les ingrédients pour réaliser vos recettes s'ajoutent automatiquement <br /> au panier.</h5>
              <h5 className="text-light" style={{marginBottom:'50px'}}>Boissons, lessive, dentifrice, ajoutez ce que vous voulez.</h5>
              <h5 className="text-light" style={{marginBottom:'50px'}}>Livraison à domicile ou retrait en drive : recevez vos courses et <br /> cuisinez facilement.</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
