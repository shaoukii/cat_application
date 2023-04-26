import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ColorSchemesExample from './pages/header';
import Home_page from './pages/home_page';
import CatDetails from "./pages/breeds_details";

function App() {
  return (
    <div className="App">
   <ColorSchemesExample/>

      <Routes>
      <Route index element={<Home_page />} />
    

        <Route path="CatDetails" element={<CatDetails />} />

  
   
        
        
      </Routes>
  
    </div>
  );
}

export default App;
