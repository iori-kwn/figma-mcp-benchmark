import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductDetailPage from './ProductDetailPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductDetailPage />
  </React.StrictMode>
);