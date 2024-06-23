import { useState } from "react";



const Login = () => {

    let [loginUser,setLoginUser] =  useState({})

    let getInputValue = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setLoginUser({...loginUser,[name]:value})
    }

    let handleSubmit = (e)=>{
        e.preventDefault();
        console.log(loginUser);
    }

    return (
        <>
            <h2 className="text-center text-5xl font-semibold my-5">Login Form</h2>
            <div className="flex justify-center mt-10">
                <form method="post" onSubmit={(e)=>handleSubmit(e)}>
                    <label htmlFor="">Enter Your Username :- </label>
                    <input type="text" placeholder="Enter Your Username" name="username" onChange={(e)=>getInputValue(e)} /><br /><br />
                    <label htmlFor="">Enter Your Email :- </label>
                    <input type="text" placeholder="Enter Your Email" name="email" onChange={(e)=>getInputValue(e)} /><br /><br />
                    <label htmlFor="">Enter Your Password :- </label>
                    <input type="text" placeholder=" Enter Your Password" name="pass" onChange={(e)=>getInputValue(e)} /> <br /><br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

export default Login;