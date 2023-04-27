import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ColorSchemesExample from './pages/header';
import Home_page from './pages/home_page';
import CatDetails from "./pages/breeds_details";
import AutoLayoutExample from "./pages/footer";

function App() {
  return (
    <div className="App">
   <ColorSchemesExample/>
   <Home_page></Home_page>
   <AutoLayoutExample></AutoLayoutExample>
    </div>
  );
}

export default App;
