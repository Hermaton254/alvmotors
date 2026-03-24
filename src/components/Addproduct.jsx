import axios from "axios"
import React,{useState} from "react"
const Addproducts =()=>{
    // declare the states 
    const [product_name, setProductName]=useState("")
    const[product_description, setProductDescription]=useState("")
    const[product_cost,setProductCost]=useState("")
    const[product_photo ,setProductPhoto]=useState("")
    // define three states for hosting data 
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const [error,setError]=useState("")
    // function to handlesubmit 
    const handlesubmit = async (e)=>{
        e.preventDefault()
        setLoading("Please wait...")
        // create a digital envelope 
        const formdata=new FormData
        // append 
        formdata.append("product_name",product_name)
        formdata.append("product_description",product_description)
        formdata.append("product_cost",product_cost)
        formdata.append("product_photo",product_photo)
        try {
            const response= await axios.post("http://hermatonhiggs.alwaysdata.net/api/addproduct",formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            
        }
    }

    
    return(
        <div className="row justify-content-center mt-3 bg-#F9FAFB">
            <div className="col-md-8 shadow p-4 Background: #F9FAFB
Form Card: #FFFFFF
Primary Button: #2563EB
Text: #111827">
                <h1 className="text-info">Add Product</h1>
                {/* bind the states  */}
                <h2 className="text-warnig">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className="text-danger">{error}</h2>
              

                <form action="" onSubmit={handlesubmit}>
                    <input type="text" className="form-control" placeholder="Enter product name" onChange={(e) => setProductName (e.target.value)}/> <br />
                    <textarea  className="form-control" placeholder="Enter product description" onChange={(e)=>setProductDescription(e.target.value)}></textarea> <br />
                    <input type="number" className="form-control"  placeholder="cost" onChange={(e)=> setProductCost (e.target.value)}/> <br />
                    <input type="file" accept="image/*" className="form-control"  placeholder="add Photo" onChange={(e) => setProductPhoto(e.target.files[0])}/> <br />
                    <button type="submit" className="form-control btn btn-primary" >Add Product</button> <br />

                </form>

            </div>

        </div>
        
    )
}
export default Addproducts