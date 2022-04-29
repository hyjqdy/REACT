import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductProvider } from './components/Context';

const root =  document.getElementById('root');
ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  root
);

 