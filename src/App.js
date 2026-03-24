import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Addproducts from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesapayment from './components/Mpesapayment';
import Test from './components/Test';
import Signin from './components/Signin';
import Navbar from './components/navbar';
function App() {

  return (
    <BrowserRouter>
      <div className="App bg-dark" >
        {/* navbar goes here  */}
        <Navbar/>


        <header className="App-header">

          <h1>Welcome to ALV Motors</h1>

        </header>

        <nav>
          <Link to="/signup" className='btn btn-dark btn-sm m-1'>Signup</Link>
          <Link to="/signin" className='btn btn-dark btn-sm m-1'>Signin</Link>
          <Link to="/addproduct" className='btn btn-dark btn-sm m-1'>Addproducts</Link>
          <Link to="/" className='btn btn-dark btn-sm m-1'>Getproduct</Link>


        </nav>
        <Routes>
          <Route path="/" element={<Getproduct />} />
          <Route path="/addproduct" element={<Addproducts />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/makepayment" element={<Mpesapayment />} />


        </Routes>


      </div>

    </BrowserRouter>
  );
}

export default App;
