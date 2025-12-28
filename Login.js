import React,{useState,useEffect,useRef} from "react";
import {useNavigate} from " react-rounter-dom";
const Login=({setAuth})=>{
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const emailRef=useRef(null);
    const navigate=useNavigate();
    useEffect(()=>{
        email.current.focus();
        const handleSubmit=(e)=>{
            e.preventDefault();
            if(email==="admin@gmail.com"&&password==="admin1234"){
                alert("Login Success");
            }else{
                alert("wrong email or password");
            }
        };
        return(
            <div style={{maxWidth:"300px",margin:"50px auto",textAlign:"center"}}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                    ref={emailRef}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} 
                    style={{display:"block", width:"100%",marginBottom:"10px"}}
                    />
                    <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    style={{display:"block",width:"100%",marginBottom:"10px"}}
                    />
                    <button type="submit" style={{width:"100%"}}>Login</button>
                </form>
            </div>
        );

    });
};
export default Login;