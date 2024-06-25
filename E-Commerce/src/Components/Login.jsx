import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    let [loginUser, setLoginUser] = useState({})

    let navigate = useNavigate()

    let getInputValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setLoginUser({ ...loginUser, [name]: value })
    }

    let handleSubmit = (e) => {
        e.preventDefault()

        const getUsers = JSON.parse(localStorage.getItem("user")) || [];

        const registerUser = getUsers.some((user) => user.username === loginUser.username && user.email === loginUser.email && user.pass === loginUser.pass);

        if (registerUser) {
            alert("Login Successfully");
            navigate("/")
        }
        else {
            alert("Please First Register");
            navigate("/register")
        }
    }

    return (
        <>
            <h2 className="text-center text-5xl font-semibold my-5">Login Form</h2>
            <div className="flex justify-center mt-10">
                <form method="post" onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="">Enter Your Username :- </label>
                    <input type="text" placeholder="Enter Your Username" name="username" onChange={(e) => getInputValue(e)} /><br /><br />
                    <label htmlFor="">Enter Your Email :- </label>
                    <input type="text" placeholder="Enter Your Email" name="email" onChange={(e) => getInputValue(e)} /><br /><br />
                    <label htmlFor="">Enter Your Password :- </label>
                    <input type="text" placeholder=" Enter Your Password" name="pass" onChange={(e) => getInputValue(e)} /> <br /><br />
                    <button type="submit">Login</button>
                </form>
            </div>
            <ToastContainer/>
        </>
    )
}

export default Login;