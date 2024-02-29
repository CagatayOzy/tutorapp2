import { Route, Routes } from 'react-router';
import './App.css';
import ResponsiveAppBar from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import ContactForm from './components/Form';
import MainFooter from './components/Footer';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Form" element={<ContactForm />}></Route>
      </Routes>
      <MainFooter />
    </div>
  ); 
}

export default App;
