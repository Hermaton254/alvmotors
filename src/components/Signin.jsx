import axios from "axios"
import React,{useState} from "react"
import { data, Link, useNavigate } from "react-router-dom"

const Signin =()=>{
     let navigate = useNavigate();
    // declare the two states here 
    const [email,SetEmail]=useState("")
    const[password,setPassword]=useState("")
    // state for hosting data 
    const [loading,setLoading]=useState("")
    const [success, setSuccess]=useState("")
    const [error,setError]=useState("")

    // function to handle submit 
    const handlesubmit =async (e)=>{
        e.preventDefault()
        setLoading("Please wait....")
        // create empty digital envelope to store user inputs 
        const formdata= new FormData()
        // append 
        formdata.append("email",email)
        formdata.append ("password",password)

        try {
            const response=await axios.post("http://hermatonhiggs.alwaysdata.net/api/signin",formdata)
            setSuccess(response.data.message)
            setLoading("")
            // if login/signin is successful we save user to local storage 
            // NB: redirect user to homepage 
            if (response.data.user){
                // login success 
                localStorage.setItem("user",JSON.stringify(response.data.user))
            
                navigate("/")
                
            }else {
                // login failed 
                setSuccess(response.data.message)
            }
            
        } catch (error) {
            
        }
        

    }
    
    
    return(
        <div className="row mt-3 justify-content-center">
            <div className="col-md-6 card shadow p-4 bg-info">
                <h1>Sign in</h1>
                {/* bind the state  */}
                 <h2 className="text-warnig">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className="text-danger">{error}</h2>

                <form action="" onSubmit={handlesubmit}>
                    <input type="email"className="form-control"placeholder="Email" onChange={(e)=> SetEmail(e.target.value)} /><br />
                    <input type="password"className="form-control"placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/> <br />
                    <button type="submit"className="form-control btn btn-primary w-100">sign in</button>
                </form>
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>

            </div>
        </div>
    )
}
export default Signin
