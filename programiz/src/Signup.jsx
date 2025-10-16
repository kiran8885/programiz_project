import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"

function Signup(){
    var [name,setName] = useState("")
    var [email,setEmail] = useState("")
    var [password,setPassword] = useState("")
    var navigate = useNavigate()
    var data = {
        myName : name,
        myEmail : email,
        myPassword : password
    }
    async function signup(){
        if (!name || !email || !password) {
            alert("Please fill all fields");
            return;
          }
          
        var response = await fetch("https://68871332071f195ca97f29a6.mockapi.io/users",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)

        })
        if(response.ok){
            alert("signup successfully")
            setName("")
            setEmail("")
            setPassword("")
            navigate("/login")
        }else{
            alert("unsuccessfull")
        }
    
    }
   
    return(
        <div className="signup">
            <h1 className="h1">Programiz</h1>
            <h2 className="h2">SignUp Here</h2>
            <label className="signup__label" htmlFor="">EnterYourName</label>
            <input className="signup__input" onChange={(e)=>setName(e.target.value)} type="text" />
            <label className="signup__label" htmlFor="">EnterYourEmail</label>
            <input className="signup__input" onChange={(e)=>setEmail(e.target.value)} type="text" />
            <label className="signup__label" htmlFor="">EnterYourPassword</label>
            <input className="signup__input" onChange={(e)=>setPassword(e.target.value)} type="text" />
            <button className="signup__button" onClick={signup}>Create an Account</button>
        </div>
    )
}
export default Signup