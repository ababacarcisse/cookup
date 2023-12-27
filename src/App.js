
import './App.css';
import Grid from './navbar/grid';
import How from './navbar/how';
import Topnavbar from './navbar/navbar';
import ImageSlider from './navbar/slider';

function App() {
  return (
    <div style={{backgroundColor:'#FEFEE2'}}>
     <Topnavbar/>
     <ImageSlider/>
     <How/>
     <Grid/>
    </div>
  );
}

export default App;
