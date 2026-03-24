
import { useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'

const Mpesapayment = () => {
  const {singleproduct}=useLocation().state || {}
    const imagepath="http://hermatonhiggs.alwaysdata.net/static/images/"
    // declare your states here 
    const [phone , setPhone ]=useState("")
    const [loading,setLoading]=useState("")
    const [success,setSuccss]=useState("")
    const [error,setError]=useState("")
    // function to make payment 
    const handlesubmit=async (e) =>{
      e.preventDefault()
      setLoading ("please wait...")
      const formdata = new FormData()
      // append 
      formdata.append("phone",phone)
      formdata.append("amount", singleproduct.product_cost)
      try {
        const response=await axios.post("http://hermatonhiggs.alwaysdata.net/api/mpesa_payment",formdata)
            setSuccss(response.data.message)
            setLoading("")
      } catch (error) {
        setError("Something went WRONG")
        setLoading("")
      }
    }

  return (
    <div className="row justify-content-center">
      <h1 className='text-success'>Make Payments - Lipa Na Mpesa</h1>
      
      <div className="col-md-8 card shadow p-4">
                <img src={imagepath+ singleproduct.product_photo} alt="" style={{height:"300px",objectFit:"cover"}} />
        
        <div className="card-body">
          <h1 className="text-info ">{singleproduct.product_name}</h1>
          <p>{singleproduct.product_description}</p>
          <b className='text-success'>{singleproduct.product_cost}</b>
      {/* bind here  */}
                <h2 className="text-warnig">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className="text-danger">{error}</h2>
          <form action=""onSubmit={handlesubmit}>
            <input type="number" className='form-control' placeholder='Enter phone 254xxxxxxx' onChange={(e)=> setPhone(e.target.value)}/> <br />
            <button type='submit' className=' btn btn-warning w-100'> Make Payment</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Mpesapayment