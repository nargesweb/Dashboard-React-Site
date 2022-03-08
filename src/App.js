import React ,{useState,useContext} from "react";
import "./App.css"
import { Route,Routes } from "react-router-dom";
// components 
import RightElement from "./Components/rightElement/RightElement";
import SlideBar from "./Components/SlideBar/SlideBar";
import Dashbaord from "./Pages/Dashboard/Dashbaord";
import styled from "styled-components";
// context 
import { DarkmoodProvider } from "./Context/DarkmoodContextProvider";
const Div = styled.div`
  background-color: ${({darkmood})=>(darkmood ? "var(--color-dark-background)" :"var(--color-background)")};
  color: ${({darkmood})=>(darkmood ? "var(--color-dark-text)" : "var(--color-dark)")};
  transition: all 0.3s ease-in;

`;

function App() {
  // for mobile menu 
  const [openMenu, setOpenmenu] = useState(false) ;
  const menu =()=>{setOpenmenu(!openMenu)}
  const darkmood = useContext (DarkmoodProvider)
  
  return (
        <Div className="App" darkmood={darkmood}>
            <SlideBar openMenu={openMenu} menu={menu}  />
            <Routes>
              <Route path="/" element={<Dashbaord/>}/>
            </Routes>
            
            <RightElement menu={menu}/>
        </Div>
  );
}

export default App;
