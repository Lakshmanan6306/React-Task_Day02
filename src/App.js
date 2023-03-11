import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {
  const data = [
                {productImage:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ1Y3G_UFZpVkUwMQP4pOMvpvkkQEqcpjCfWXZqsiwqqghgP7D2SMLtRJvC43JPRJoZhmTp7KR5E0HfDvw_FoH7dp3ZkU3pyL8SN2E4iNAJGy5xcFNhxv0W&usqp=CAE",
                 productName:"Apple iPhone 14 Pro Max 256GB",
                 productPrice:"₹1,49,9900.00",
                 Rating: <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                },
                {
                  productImage:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQboyuY9hfMw6XRlZdwS3F4HL9t1q24Ym9ZsWSAJuNzQCaAoUEUfxLLNL6_CZa8XXC-BY3ZrTSREvdqZTIYvRQrsYB-R4LrQuLo2BSngIIRFZMp4rqsnqHSPQ&usqp=CAE",
                  productName:"Apple iPhone 13 Red 128GB",
                  productPrice:"₹63,100.00",
                  Rating: <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>

                },
                {
                  productImage:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQBAQ986b_2FMSbvKhqsNb6ZJ5xc0suBVTrH728_KIB8qcX3bQfi4ofAPVGptHqIk92Xwvks3KmELwgeTKwBf344UiAOvt_tAilQnAk_XigEkDKx4S0xNYr&usqp=CAE",
                  productName:"Samsung Galaxy S22 Ultra 5G",
                  productPrice:"₹98,899.00",
                  Rating: <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                },
                {
                  productImage:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRtQU4MKEs6kmwncQTx__r_DPo8VbtxDWZwQVGYXxNvfXTywQJJ23V06gqlRhCvcOZcjMWtAS020ZVcW2wVdlC2I-k_vr_eNzxPIHlapI7H4LG4syJfPDsjxQ&usqp=CAE",
                  productName:"Samsung Galaxy Z Flip3 5G",
                  productPrice:"₹49,999.00",
                  Rating: <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>

                },
                {
                  productImage:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTzn7ITuRHUY9iMnMBWmUZwBFg0X26oLfKST5-QrgiWB8cE2kZJc6jFx0eVEg5apl28FV3iwHzlV_Uwtofu7wlGWyoVfGyi_k7CzHK77ePsLZbnAZhAL-q8dA&usqp=CAE",
                  productName:"OnePlus 11 Titan Black",
                  productPrice:"₹61,999.00",
                  Rating: <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>

                },
                {
                  productImage:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRKQZ_w8mO_3V0UWKsJoOyB8mHVVITfkNq8vLemFYexbqIjtEmrrMURe0UNsJYUztZ2KcY-HI1Jxj4g5xLQcLQjSYaJIFV6JckygWS4V7Oo-gvbLfdyexOr&usqp=CAE",
                  productName:"OnePlus 10 pro 5G",
                  productPrice:"₹61,999.00",
                  Rating: <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>

                },
                {
                  productImage:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQvE12_46rIQ03IkYOGKbONKDBtvFosRYrHRHBh2XrPKJ0-7-jaglabOa83OgjRYFAuUxTNzd3VeJ368ulFl-ZXQBpX2sacLyAbuY7IfRjtaqBGIE6939m1Yw&usqp=CAE",
                  productName:"XIAOMI Mi 12s 128GB",
                  productPrice:"₹97,999.00",
                  Rating: <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>

                },
                {
                  productImage:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR3brvOoJk_bTPJUho28BgvBIjJvY9nmDoed0ms-HhxpgOICIoOUR4GfBjFYMwX-ke6Wt85JUKZ3EYBQstJpdpHJJBa6L2lR-Rnl_1JrOF9licbkPNM_kGeyw&usqp=CAE",
                  productName:"Xiaomi Mi 10 128GB",
                  productPrice:"₹55,999.00",
                  Rating: <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>

                }];

  const [count, setCount] = useState(0)
  return (
    <div className="App">
       <Navbar collapseOnSelect expand="lg" bg="lite" variant="lite">
      <Container>
        <Navbar.Brand href="#home">Shopping Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <NavDropdown title="Shop" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Popular items
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><Button variant="light"><i class="fa-solid fa-cart-shopping"></i> Cart <span>{count}</span></Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
       </Navbar>
      
       <header className='bg-dark  py-5'>
          <div className='container px-4 px-lg-5 my-5'>
            <div className='text-center text-white'>
              <h1 className='display-4 fw-bolder'>Shop in Style</h1>
              <p className='lead fw-normal text-white-50 mb-0'>With this shop hompeage template</p>
            </div>
          </div>
       </header>
        <div className='head py-5'>
          <div className='container px-4 px-lg-5 mt-5'>
            <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
             
                   {data.map((data1,index)=> <Cards
                      index={index}
                      data1 = {data1}
                      setCount ={setCount}
                      count={count}
                    />)} 
              
            </div>
          </div>
        </div>
       <footer className='py-5 bg-dark'>
        <div className='container'>
          <p className='m-0 text-center text-white'>
              Copyright ©️ Your Website 2023
          </p>       
        </div>
       </footer>
      
    </div>
  );
} 

export default App;


function Cards({data1,index,setCount,count}){
  const [display,setdisplay] = useState(false);
  function add(e){
    // e.preventDefault();
    setdisplay(!display);
    setCount(count+1);
  }
  function remove(e){
    // e.preventDefault();
    setdisplay(!display);
    setCount(count-1);
  }
  return(
    <div className='col mb-5'>
      <div className='card h-100 p-1' key={index}>
        <img className='card-img-top' src={data1.productImage}/>
        <div className='card-body p-4'>
          <div className='text-center'>
              <h5 className='fw-bolder'>{data1.productName}</h5>
              {data1.productPrice}<br/>
              {data1.Rating}
          </div>
        </div>
        <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
          <div className='text-center'>
            {!display? <a className='btn btn-primary mt-auto' onClick={add} href='#'>Add to cart <i class="fa-solid fa-cart-plus"></i></a> : ""}
            {display? <a className='btn mt-auto btn-warning' onClick={remove} href='#'>Remove from Cart</a>:""}
          </div>
        </div>
      </div>
    </div>
  );
}