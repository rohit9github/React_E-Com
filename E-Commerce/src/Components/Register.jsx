import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    let [registerUser, setRegisterUser] = useState({});
    let [error, setError] = useState({});


    let getUserValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setRegisterUser({ ...registerUser, [name]: value });
        if (name === "username") {
            if (value === "") {
                setError({ ...error, nameError: "Username Is Required" });
            }
            else {
                setError({ ...error, nameError: "" })
            }
        }
        else if (name === "email") {
            if (value === "") {
                setError({ ...error, emailError: "Email Is Required" });
            }
            else {
                setError({ ...error, emailError: "" })
            }
        }
        else if (name === "number") {
            if (value === "") {
                setError({ ...error, numberError: "Number Is Required" })
            }
            else {
                setError({ ...error, numberError: "" });
            }
        }
        else if (name === "pass") {
            if (value === "") {
                setError({ ...error, passError: "Password Is Required" })
            }
            else {
                setError({ ...error, passError: "" })
            }
        }
        else if (name === "confirmpass") {
            if (value === "") {
                setError({ ...error, confirmpassError: "Please Confirm Your Password" })
            }
            else {
                setError({ ...error, confirmpassError: "" })
            }
        }
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        if (registerUser.username === undefined) {
            setError({ ...error, nameError: "Username Is Required" });
        }
        else if (registerUser.email === undefined) {
            setError({ ...error, emailError: "Email Is Required" })
        }
        else if (registerUser.number === undefined) {
            setError({ ...error, numberError: "Number Is Required" })
        }
        else if (registerUser.pass === undefined) {
            setError({ ...error, passError: "Password Is Required" })
        }
        else if (registerUser.confirmpass === undefined) {
            setError({ ...error, confirmpassError: "Please Confirm Your  Password" })
        }
        else {
            let users = JSON.parse(localStorage.getItem("user")) || [];
            users.push(registerUser);
            localStorage.setItem("user", JSON.stringify(users));
            setRegisterUser({})
            toast.success("Register SuccessFully")
            setError({})
        }

    }

    return (
        <>
            <div className="linear-bg h-screen flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 border bg-white py-8 rounded-md">
                    <h2 className="text-center text-5xl font-semibold my-5">Register Form</h2>
                    <div className="flex justify-center px-28 mt-10 ">
                        <form method="post" onSubmit={(e) => handleSubmit(e)}>
                            <div className="my-5">
                                <label className="text-xl font-medium inline-block">Enter Your Name :- </label>
                                <input className="border-black inline-block w-full pr-6 border-b-2 py-2 ps-4 text-lg outline-none bg-transparent " type="text" placeholder="Enter Your Name" name="username" value={registerUser.username ? registerUser.username : ""} onChange={(e) => getUserValue(e)} />
                                <div>
                                    <span>{error.nameError ? error.nameError : ""}</span>
                                </div>
                            </div>

                            <div className="my-5">
                                <label className="text-xl font-medium inline-block">Enter Your Email :- </label>
                                <input className="border-black inline-block w-full pr-6 border-b-2 py-2 ps-4 text-lg outline-none bg-transparent " type="text" placeholder="Enter Your Email" name="email" value={registerUser.email ? registerUser.email : ""} onChange={(e) => getUserValue(e)} />
                                <div>
                                    <span>{error.emailError ? error.emailError : ""}</span>
                                </div>
                            </div>
                            <div className="my-5">
                                <label className="text-xl font-medium inline-block">Enter Your Number :-  </label>
                                <input className="border-black inline-block w-full pr-6 border-b-2 py-2 ps-4 text-lg outline-none bg-transparent " type="text" placeholder="Enter Your Number" name="number" value={registerUser.number ? registerUser.number : ""} onChange={(e) => getUserValue(e)} />
                                <div>
                                    <span>{error.numberError ? error.numberError : ""}</span>
                                </div>
                            </div>
                            <div className="my-5">
                                <label className="text-xl font-medium inline-block">Enter Your Password :-  </label>
                                <input className="border-black inline-block w-full pr-6 border-b-2 py-2 ps-4 text-lg outline-none bg-transparent " type="text" placeholder="Enter Your Password" name="pass" value={registerUser.pass ? registerUser.pass : ""} onChange={(e) => getUserValue(e)} />
                                <div>
                                    <span>{error.passError ? error.passError : ""}</span>
                                </div>
                            </div>
                            <div className="my-5">
                                <label className="text-xl font-medium inline-block">Confirm Password :- </label>
                                <input className="border-black inline-block w-full pr-6 border-b-2 py-2 ps-4 text-lg outline-none bg-transparent " type="text" placeholder="Confirm Your Password" name="confirmpass" value={registerUser.confirmpass ? registerUser.confirmpass : ""} onChange={(e) => getUserValue(e)} />
                                <div>
                                    <span>{error.confirmpassError ? error.confirmpassError : ""}</span>
                                </div>
                            </div>
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