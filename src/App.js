import React from 'react';
import { BrowserRouter as Router, Route, Routes, RouterProvider } from 'react-router-dom'; // Note the import change
import Authentification from './page/Authentification';
import Header from './component/Header';
import Inscription from './page/Inscription';
import Enseigner from './page/Enseigner';
import About from './page/About';
import Deposer from './page/Deposer'
import Footer from './component/Footer';
import  { Toaster } from 'react-hot-toast';
import Accueil from './page/Accueil';

const App = () => {
  return (
    <>
    <Toaster/>
    <div>
      <Header />

      <Routes>
        {/* Other routes */}
        <Route path="/Authentification" element={<Authentification />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Enseigner" element={<Enseigner />} />
        <Route path="/Deposer" element={<Deposer />} />
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Accueil />} />
      </Routes>
      <Footer />
    </div>
    </>
  );


};

export default App;

