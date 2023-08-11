import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Authentification from './page/Authentification';
import Inscription from './page/Inscription';
import About from './page/About';
import Enseigner from './page/Enseigner';
import Deposer from './page/Deposer';
import { store } from './redux/index';
import { Provider } from 'react-redux';
import Accueil from './page/Accueil';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path='/' element={<Accueil/>}/>
      <Route index element={<About/>}/>
      <Route path='Enseigner' element={<Enseigner/>}/>
      <Route path='Deposer' element={<Deposer/>}/>
      <Route path='Authentification' element={<Authentification/>}/>
      <Route path='Inscription' element={<Inscription/>}/>
      <Route path='About' element={<About/>}/>
    </Route>
  )
);

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
  root
);

reportWebVitals();
