import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom"

const Signup = () => {
    // declare our states here 
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    // function to handle submit 
    const handlesubmit = async(e) => {
        e.preventDefault()
        setLoading("Please wait...")
        // create empty digital envelope to store user imput 
        const formdata = new FormData()
        // append/add 
        formdata.append("username",username)
        formdata.append("email",email)
        formdata.append("password",password)
        formdata.append("phone",phone)

        try {
            const response= await axios.post("http://hermatonhiggs.alwaysdata.net/api/signup",formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            
        }
    }
    return (
        <div className="row  mt-3 justify-content-center bg-dark">
            <div className="col-md-6 card shadow p-4 bg-info ">
                <h1>Signup</h1>
                {/* bind the state  */}
                <h2 className="text-warnig">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className="text-danger">{error}</h2>

                <form action="" onSubmit={handlesubmit}>
                    <input type="text" className="form-control" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} /> <br />
                    <input type="email" className="form-control" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} /> <br />
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} /> <br />
                    <input type="tel" className="form-control" placeholder="Enter Phone" onChange={(e) => setPhone(e.target.value)} /> <br />
                    <button type="submit" className="form-control btn btn-primary w-100">Sign up</button>
                </form>
                <p>Already have an account? <Link to="/signin">Sign in</Link></p>
            </div>

        </div>
    )
}
export default Signup