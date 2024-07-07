import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Orders from './components/Orders';
import Courses from './components/Courses';
import Homepage from './components/Homepage';
import Trasaction from './components/Trasaction';



function App() {
  return (

    <>



    <Orders/>
    <Courses/>
    <Homepage/>
    <Trasaction/>





    </>

  );
}

export default App;
