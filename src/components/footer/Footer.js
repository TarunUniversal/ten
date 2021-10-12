import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import logo from "../../images/tenlogo.png";

function Footer() {
    return (
        <>
        <div style={{backgroundColor:'#212121', color:'white', marginTop:"2rem", padding:"2rem 0"}} >
            <div style={{display:'flex', justifyContent:"center", alignItems:'center', flexDirection:"row", flexWrap:'wrap'}} >
            <img src={logo} alt="#" style={{height:'50px', textAlign:'center', marginRight:'2rem'}} />
            <h4 style={{textAlign:'center'}} >The Entrepreneurship Network</h4>
            </div>
            <br/>
            <div style={{display:'flex', justifyContent:"space-evenly", alignItems:'center', flexDirection:"row", flexWrap:'wrap',fontSize:'20px'}} >
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
                <p className="m-0" >About Us</p>
                <p className="m-0" >FAQ's</p>
                <p className="m-0" >Contact Us</p>
            </div>
            <br/>
            <p style={{textAlign:'center'}} >© 2020 Tarun Rathore - The Entrepreneurship Network</p>
        </div>   
        </>
    )
}

export default Footer
