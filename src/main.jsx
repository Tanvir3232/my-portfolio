import React from 'react'
import ReactDOM from 'react-dom/client'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import 'aos/dist/aos.js'; 
AOS.init();
import {
  RouterProvider,
} from "react-router-dom";
import router from './route/Route.jsx';
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
