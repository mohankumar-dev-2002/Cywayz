import './App.css';
import { Navbar,Hero,Article,Mentee,Sponsor,Getstared,Footer} from './components'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Article/>
      <Mentee/>
      <Sponsor/>
      <Getstared/>
      <Footer/>
    </div>
  );
}

export default App;
