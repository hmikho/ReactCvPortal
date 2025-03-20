import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import CvData from "./pages/CvData";
import Projects from "./pages/Projects";

function NotFound() {
  return <h2>Oops! Page not found. <Link to="/">Go back home</Link></h2>;
}

export default function App() {
  return (
    <Router>  
      <nav>
        <ul>
          <li><Link to="/">CV</Link></li>
          <li><Link to="/projects">Portfolio</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CvData />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

