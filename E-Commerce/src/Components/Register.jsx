import { useState } from "react"
import { ToastContainer,toast  } from 'react-toastify';
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
        localStorage.setItem("user",JSON.stringify(users));
        setRegisterUser({})
        toast.success("Register SuccessFully")
    }

    return (
        <>
            <h2 className="text-center text-5xl font-semibold my-5">Register Form</h2>
            <div className="flex justify-center mt-10">
                <form method="post" onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="">Enter Your Name :- </label>
                    <input type="text" placeholder="Enter Your Name" name="username" value={registerUser.username ? registerUser.username : ""} onChange={(e) => getUserValue(e)} /><br /><br />
                    <label htmlFor="">Enter Your Email :- </label>
                    <input type="text" placeholder="Enter Your Email" name="email" value={registerUser.email ? registerUser.email : ""} onChange={(e) => getUserValue(e)} /><br /><br />
                    <label htmlFor="">Enter Your Number :-  </label>
                    <input type="text" placeholder="Enter Your Number" name="number" value={registerUser.number ? registerUser.number : ""} onChange={(e) => getUserValue(e)} /><br /><br />
                    <label htmlFor="">Enter Your Birth-Date :- </label>
                    <input type="date" name="bdate" value={registerUser.bdate?registerUser.bdate :""} onChange={(e) => getUserValue(e)} /><br /><br />
                    <label htmlFor="">Enter Your Password :-  </label>
                    <input type="text" placeholder="Enter Your Password" name="pass" value={registerUser.pass?registerUser.pass :""} onChange={(e) => getUserValue(e)} /><br /><br />
                    <label htmlFor="">Confirm Password :- </label>
                    <input type="text" placeholder="Enter Your Confirm Password" name="confirmpass" value={registerUser.confirmpass ? registerUser.confirmpass :""} onChange={(e) => getUserValue(e)} /><br /> <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default Register;