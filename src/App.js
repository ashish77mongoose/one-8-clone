import { createContext, useState } from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import './index.css'
import Home from "./Pages/Home";

export const modeContext = createContext(null);
function App() {
  const [mode, setMode] = useState('dark');
  return (
    <div className="App">
    
      <Router>
      <modeContext.Provider value={{ mode, setMode }}>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </modeContext.Provider>
      </Router>
    </div>
  );
}

export default App;
