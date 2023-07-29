import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the import change
import Authentification from './page/Authentification';
import Header from './component/Header';
import Inscription from './page/Inscription';
import Enseigner from './page/Enseigner';
import About from './page/About';
import Footer from './component/Footer';
import toast, { Toaster } from 'react-hot-toast';
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
        <Route path="/About" element={<About />} />
        {/* Additional routes go here */}
      </Routes>
      <Footer />
    </div>
    </>
  );
};

export default App;

