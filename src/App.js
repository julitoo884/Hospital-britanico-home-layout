import React from 'react';
import {useRoutes } from "react-router-dom";
import DefaultLayout from './layouts/default';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Home from './screens/home';
import Parametro from './screens/second';
import './App.css';

function App() {
  
  const mainRoutes = {
    path: '/',
    element: <DefaultLayout/>,
    children: [
     {path: '/', element: <Home/> },
     {path: '/:parametro', element: <Parametro/> },
    ],
  };

  const routing = useRoutes([mainRoutes]);
  return (
    <>{routing}</>
  );
}

export default App; 