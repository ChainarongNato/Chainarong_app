import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './pages/Carousel';
import Carousel2 from './pages/Carousel2';
import Menu from './pages/Menu';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Carousel2 />
      <Menu />
    </div>
  );
}

export default App;