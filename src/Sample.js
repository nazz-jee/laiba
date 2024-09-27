import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Outlet } from "react-router-dom";


function Sample(props) {
    return (
     <>
        <Col md lg xl ="4">
        <Link to="/Page2">   <img className='' src = {props.imgUrl} alt='description img' /> </Link>
             <h1 className='mt-3'style={{fontSize:'30px', fontWeight:''}} >{props.title}</h1>
             <Link to="/Page2">   <button  className="bg-black-500 text-white px-4 py-2 text-lg mt-3" style={{fontSize:'20px',backgroundColor:'black', border:'2px solid white'}}>SHOP NOW</button> </Link>
        </Col>

    {/* //     <div>
    //         <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>

    //         <h1 style={{fontSize:'100px'}}>
    //             Hello world!
    //         </h1>
    //     </div> */}
      <Outlet />
    </>

    )
}

export default Sample
