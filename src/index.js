import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';

import Authentification from './page/Authentification';
import Inscription from './page/Inscription';
import About from './page/About';
import Enseigner from './page/Enseigner';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route index element={<About/>}/>
      <Route path='Enseigner' element={<Enseigner/>}/>
      <Route path='Authentification' element={<Authentification/>}/>
      <Route path='Inscription' element={<Inscription/>}/>
      <Route path='About' element={<About/>}/>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
