import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home'
import { Navbar } from './components/Navbar';
import { SecondSection } from './components/SecondSection';
import background from './background.jpg'
import { RatePage } from './components/Rates';
import { ContactPage } from './components/Contact';
function App() {
  return (
    <div>
     
     <div style={{backgroundImage: 
            "url('https://i.imgur.com/McyeA9G.jpg')",
            
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover'}} className='bg-img-home'>
      <Navbar/>
      <Home/>
      
      </div>
      <div>
        <SecondSection/>
      </div>
      <div>
        <RatePage/>
      </div>
      <div id="contact">
        <ContactPage/>
      </div>
    </div>
  );
}

export default App;
