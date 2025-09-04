import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home.jsx';
import AllCollection from './AllCollection.jsx';
import SingleWatchPage from './SingleWatchPage.jsx';

const App = () => {
  return (
    <BrowserRouter basename="/watches-ecommerce-project">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-collection" element={<AllCollection />} />
        <Route path="/watch/:id" element={<SingleWatchPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
