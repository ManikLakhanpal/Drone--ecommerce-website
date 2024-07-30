import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import Store from './app/Store';
import { Toaster } from 'react-hot-toast';
import { Highlights } from './components/main/Highlight';
import { Sales } from './components/main/OurProducts';
import { Hero } from './components/head/Hero';
import { Navbar } from './components/head/Navbar';
import { Footer } from './components/foot/Footer';
import { heroapi, high, sneaker, footerAPI, frames, Electronics, camera, motors, accessories, Propellers, battery, radio, popularsales } from './data/data';
import Modal from './components/main/Modal';
import Psales from './components/main/PopularSales';

const App = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  const handleCloseModal = () => {
    setSelectedProductId(null);
  };

  const categories = [Electronics, frames,camera,motors,accessories,Propellers,battery,radio];

  return (
    <>
      <Navbar />
      <main>
        <Hero heroapi={heroapi} />
        <Psales endpoint={popularsales}/>
        <Highlights endpoint={high} ifExists onProductClick={handleProductClick} />
        <Sales categories={categories} numberOfItems={3} ifExists onProductClick={handleProductClick} />
        <Highlights endpoint={sneaker} onProductClick={handleProductClick} />
        <br />
      </main>
      <Footer footerAPI={footerAPI} />
      {selectedProductId && (
        <Modal productId={selectedProductId} onClose={handleCloseModal} />
      )}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Toaster position="top-center" reverseOrder={false} />
      <App />
    </Provider>
  </React.StrictMode>
);
