import { useState } from "react"



const Register = () => {

    let[registerUser,setRegisterUser] =  useState({})


    let getUserValue = (e)=>{
          let name = e.target.name;
          let value = e.target.value;
          setRegisterUser({...registerUser,[name]:value})  
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(registerUser)
    }

    return (
        <>
            <h2 className="text-center text-5xl font-semibold my-5">Register Form</h2>
            <div className="flex justify-center mt-10">
                <form method="post" onSubmit={(e)=>handleSubmit(e)}>
                    <label htmlFor="">Enter Your Name :- </label>
                    <input type="text" placeholder="Enter Your Name" name="username" onChange={(e)=>getUserValue(e)} /><br /><br />
                    <label htmlFor="">Enter Your Email :- </label>
                    <input type="text" placeholder="Enter Your Email" name="email" onChange={(e)=>getUserValue(e)} /><br /><br />
                    <label htmlFor="">Enter Your Number :-  </label>
                    <input type="text" placeholder="Enter Your Number" name="number" onChange={(e)=>getUserValue(e)} /><br /><br />
                    <label htmlFor="">Enter Your Birth-Date :- </label>
                    <input type="date" name="bdate" onChange={(e)=>getUserValue(e)} /><br /><br />
                    <label htmlFor="">Enter Your Password :-  </label>
                    <input type="text" placeholder="Enter Your Password" name="pass" onChange={(e)=>getUserValue(e)} /><br /><br />
                    <label htmlFor="">Confirm Password :- </label>
                    <input type="text" placeholder="Enter Your Confirm Password" name="confirmpass" onChange={(e)=>getUserValue(e)} /><br /> <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Register;