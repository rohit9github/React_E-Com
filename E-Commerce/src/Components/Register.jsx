import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    let [registerUser, setRegisterUser] = useState({})


    let getUserValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setRegisterUser({ ...registerUser, [name]: value })
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        let users = JSON.parse(localStorage.getItem("user")) || [];
        users.push(registerUser);
        localStorage.setItem("user", JSON.stringify(users));
        setRegisterUser({})
        toast.success("Register SuccessFully")
    }

    return (
        <>
            <div className="linear-bg h-screen flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 border bg-white py-8 rounded-md">
                    <h2 className="text-center text-5xl font-semibold my-5">Register Form</h2>
                    <div className="flex justify-center px-28 mt-10 ">
                        <form method="post" onSubmit={(e) => handleSubmit(e)}>
                            <label className="text-xl font-medium mb-2 inline-block">Enter Your Name :- </label>
                            <input className="border-black inline-block w-full pr-6 border-b-2 py-2 ps-4 text-lg outline-none bg-transparent " type="text" placeholder="Enter Your Name" name="username" value={registerUser.username ? registerUser.username : ""} onChange={(e) => getUserValue(e)} /><br /><br />
                            <label className="text-xl font-medium mb-2 inline-block">Enter Your Email :- </label>
                            <input className="border-black inline-block w-full pr-6 border-b-2 py-2 ps-4 text-lg outline-none bg-transparent " type="text" placeholder="Enter Your Email" name="email" value={registerUser.email ? registerUser.email : ""} onChange={(e) => getUserValue(e)} /><br /><br />
                            <label className="text-xl font-medium mb-2 inline-block">Enter Your Number :-  </label>
                            <input className="border-black inline-block w-full pr-6 border-b-2 py-2 ps-4 text-lg outline-none bg-transparent " type="text" placeholder="Enter Your Number" name="number" value={registerUser.number ? registerUser.number : ""} onChange={(e) => getUserValue(e)} /><br /><br />
                            <label className="text-xl font-medium mb-1 inline-block">Enter Your Password :-  </label>
                            <input className="border-black inline-block w-full pr-6 border-b-2 py-2 ps-4 text-lg outline-none bg-transparent " type="text" placeholder="Enter Your Password" name="pass" value={registerUser.pass ? registerUser.pass : ""} onChange={(e) => getUserValue(e)} /><br /><br />
                            <label className="text-xl font-medium mb-1 inline-block">Confirm Password :- </label>
                            <input className="border-black inline-block w-full pr-6 border-b-2 py-2 ps-4 text-lg outline-none bg-transparent " type="text" placeholder="Enter Your Confirm Password" name="confirmpass" value={registerUser.confirmpass ? registerUser.confirmpass : ""} onChange={(e) => getUserValue(e)} /><br /> <br />
                            <button type="submit" className="linear-bg w-full text-white text-2xl font-semibold px-7 py-3 mt-8 rounded-md">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Register;