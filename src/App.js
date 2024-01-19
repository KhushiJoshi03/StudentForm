import { Routes,Route } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import Add from "./Add";
import Display from "./Display";
import Login from "./Login";
function App()
{
  return(
    <>
      
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Add" element={<Add/>}/>
      <Route path="/Display" element={<Display/>}/>
      <Route path="/Login" element={<Login/>}/>
      </Routes>
    </>
  )
}
export default App;