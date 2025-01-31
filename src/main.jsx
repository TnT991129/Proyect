
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar.jsx';
import { SignIn } from './Pages/singn & log/sing in/sign.jsx';
import LogIn from './Pages/singn & log/log in/login.jsx';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sigin" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
