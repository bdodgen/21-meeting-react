import logo from './logo.svg';
import './App.css';
import Term from './components/Term'
import Clicker from './components/Clicker/Clicker'
import ClickerTwo from './components/ClickerTwo/ClickerTwo';


function App() {
  return (
    <>
      <Term
        term='isthmus'
        definition="a narrow strip of land that connects two larger landmasses and separates two bodies of water"
      />
      <Term
        term='anemone'
        definition="a plant of the buttercup family which typically has brightly coloured flowers and deeply divided leaves"
      />
      <Term
        term='otorhinolaryngologist'
        definition="a medical specialist concerned especially with the ear, nose, and throat and related parts of the head and neck"
      />
      <Clicker />
      <ClickerTwo />
    </>
  );
}

export default App;
