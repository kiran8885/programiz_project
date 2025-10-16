import React from "react"
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Python from "./Python"
import Signup from "./Signup"

function App(){
  

return(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/python" element={<Python/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        
      
      </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App