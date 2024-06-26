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
            <div className="linear-bg h-screen flex justify-center items-center">
            <div className="max-w-4xl mx-auto px-4 border bg-white py-20 rounded-md">
            <h2 className="text-center text-5xl font-semibold ">Login Form</h2>
                <div className="flex justify-center px-16 mt-10">
                    <form method="post" onSubmit={(e) => handleSubmit(e)} >
                        <label className="text-xl font-medium mb-2 inline-block">Enter Your Username :- </label>
                        <input type="text" placeholder="Enter Your Username" className="border-black inline-block w-full pr-6 border-b-2 py-2 ps-4 text-lg outline-none bg-transparent " name="username" onChange={(e) => getInputValue(e)} /><br /><br />
                        <label className="text-xl font-medium mb-2 inline-block">Enter Your Email :- </label>
                        <input type="text" placeholder="Enter Your Email" className="border-black inline-block w-full pr-6 border-b-2 py-2 ps-4 text-lg outline-none bg-transparent " name="email" onChange={(e) => getInputValue(e)} /><br /><br />
                        <label className="text-xl font-medium mb-2 inline-block">Enter Your Password :- </label>
                        <input type="text" placeholder=" Enter Your Password" className="border-black inline-block w-full pr-6 border-b-2 py-2 ps-4 text-lg outline-none bg-transparent " name="pass" onChange={(e) => getInputValue(e)} /> <br /><br />
                        <button type="submit" className="linear-bg w-full text-white text-2xl font-semibold px-7 py-3 mt-8 rounded-md">Login</button>
                    </form>
                </div>
            </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login;