import './App.css';
import Image from './Component/Image/Image.js';
import Tagline from './Component/Tagline/Tagline.js'
import Counter from './Component/Counter/Counter.js';

function App() {



  return (
    <div className="App">
      <div className="container">
        <Image /><br/>
        <Tagline />
        <Counter />
        <a href="http://www.instagram.com/nerdscarf" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>

      </div>
    </div>
  );
}

export default App;
