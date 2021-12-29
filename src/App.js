import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Allproducts from './Pages/AllProducts/Allproducts';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Shop from './Pages/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Allproducts" element={<Allproducts />} />
          <Route path="/Shop" element={<Shop />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
