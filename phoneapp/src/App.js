import './App.css';
import React, {Suspense} from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from  './components/Navbar';
import ProductList from './components/ProductList';
import Detail from './components/Detail';
import Default from './components/Default';

const Cart = React.lazy(() => import('./components/Cart'));

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={
            <Suspense fallback={<h1>Loading...</h1>}>
               <Cart />
          </Suspense> } />
          <Route path="/details/:id" element={<Detail />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
