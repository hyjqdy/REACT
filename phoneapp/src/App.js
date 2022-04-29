import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import Navbar from  './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Detail from './components/Detail';
import Default from './components/Default';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Detail />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
