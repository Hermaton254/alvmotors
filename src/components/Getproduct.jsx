import { useNavigate } from "react-router-dom"
import axios from "axios"
import React,{useState ,useEffect} from "react"
import Corousel from "./Corousel"
const Getproduct =()=>{
    let navigate = useNavigate();
    // declare our states here 
    const [loading,setLoading]=useState("")
    const [products,setProducts]=useState([])
    const [error,setError]=useState("")
    // function to get products
    const getproducts=async ()=>{
        setLoading("Please wait...")
        try {
            const response =await axios.get("http://hermatonhiggs.alwaysdata.net/api/getproducts")
            setProducts(response.data)
            setLoading("")
        } catch (error) {
            
        }
    }
    // call the function 
    useEffect(()=>{
        getproducts()

    },[])
    console.log(products)
    

    const imagepath="http://hermatonhiggs.alwaysdata.net/static/images/"
        
    return(
        <div className="row">
            {/* carousel goes here  */}
            <Corousel/>
            <h1 className="text-danger">Available products</h1>
            {/* bind the states  */}
            <h2 className="text-info">{loading}</h2>
            <h2 className="text-danger">{error}</h2>
            {/* map here  */}
            {products.map(singleproduct=>(

            <div className="col-md-3 mb-4">
                <div className="card shadow h-100 ">

                {/* image goessingleproduct.product_cost} here  */}
                <img src={imagepath+ singleproduct.product_photo} alt="" style={{height:"300px",objectFit:""}} />
                <div className="card-body"></div>
                <h2 className="text-primary">{singleproduct.product_name}</h2>
                <p>{singleproduct.product_description} </p>
                <b className="text-warnig">{singleproduct.product_cost} </b>
                <button className="btn btn-info w-100" onClick={()=>navigate("/makepayment",{state:{singleproduct}})}>Purchase now</button>
                </div>
            
            </div>
        ))}
        </div>
    )
}
export default Getproduct