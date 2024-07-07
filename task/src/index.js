import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import Trasaction from './components/Trasaction';
import Orders from './components/Orders';
import Courses from './components/Courses';
import Homepage from './components/Homepage';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { MdOutlineWebhook } from "react-icons/md";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <BrowserRouter>
      <nav>
      <MdOutlineWebhook className='nav-icon' />


        <ul >

          <li>  <Link to="/orders">Orders</Link></li>
          <li>  <Link to="/courses">Courses</Link></li>
          <li>  <Link to="/homepage">Homepage</Link></li>
          <li>  <Link to="/transaction">Transction</Link></li>


        </ul>

      </nav>
      


      <Routes>




        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/transaction" element={<Trasaction />}></Route>
      </Routes >
    </BrowserRouter >




  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
