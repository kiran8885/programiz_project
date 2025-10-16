import React from "react";
import { FaJs, FaPython,FaJava,FaDatabase,FaCss3,FaHtml5 } from "react-icons/fa";
import "./App.css"
import { useNavigate } from "react-router-dom";


function Home(){
    var navigate = useNavigate()
    function pythonPage(){
        navigate("./python")
    }
    
    var navigate = useNavigate()
    function signup(){
        navigate("/signup")
        }
        var navigate = useNavigate()
        function login(){
          navigate("/login")
        }
    
    
  return(
    <div>
    <nav>
      <h1>Programiz</h1>
      <select name="Courses" id="Courses">
      <option value="Courses">Courses</option>
      <option value="JavaScript">JavaScript</option>
      <option value="C">C</option>
      <option value="C++">C++</option>
      <option value="Python">Python</option>
      </select>
      <select name="" id="">
        <option value="">Examples</option>
      </select>
      <input type="text" placeholder="Search"/>
      <button onClick={signup}>Signup</button>
      <button onClick={login}>Login</button>
    </nav>
    <div className="learn">
    <h1>Learn Programs for free</h1> 
    </div>
    
    <div className="center-container">
    
    <div className="button-group">   
   
      
      <button onClick={pythonPage}><FaPython/>Python</button>
      <button><FaJs />JavaScript</button>
      <button>C++</button>
      <button><FaJava/>Java</button>
      <button><FaDatabase/>SQL</button>
      <button><FaCss3/>CSS</button>
      <button><FaHtml5/>HTML</button>
    </div>
    </div>
    </div>
  )
}
export default Home