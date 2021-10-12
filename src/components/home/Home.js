import React from 'react'
import './Home.css';
import img1 from "../../images/giphy.gif"
import dgtmkt from "../../images/digitalmkt.jpg"
import entre from "../../images/entrepreneur.jpg"
import promgt from "../../images/productmngt.jpg"
import { Button, Card, Carousel } from 'react-bootstrap';
import Testimonial from "../testimonial/Testimonial"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import Contact from '../contact/Contact';

function Home() {

    return (
        <>

            {/* 1st section */}

            <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', flexWrap:'wrap', height:"80vh", padding:'0% 8% 0% 8%',backgroundColor:'#D9CAB3'}} >
                <div >
                    <h1 style={{color:'#212121'}} >Build Next-Gen Solutions with<br/> our best Team</h1>
                    <p style={{color:'#212121'}} >“Entrepreneurship is living a few years of your life like most people won't so<br/> you can spend the rest of your life like most people cant.”</p>
                    <div>
                    <Button variant="outline-dark">Join Our Discord <FontAwesomeIcon icon={faDiscord} /> Server</Button>
                    &emsp;
                    <Button variant="dark">Login</Button>
                    </div>
                </div>
                <div>
                    <img src={img1} alt="#" style={{}} />
                </div>
            </div>



            {/* 2nd section */}

            <div style={{padding:'1% 8% 0 8%', display:'flex', flexDirection:"column", justifyContent:'center', height:'500px', backgroundColor:'#F6F6F6'}}>
                <h1 style={{color:'#212121'}} >About Us</h1>
                <h4>The Entrepreneurship Network (TEN) is a community-based Edu-Tech group whose objective is to provide quality learning and expertise.
                    Our current customer segment, at present, stands at 200 plus colleges and 10000 plus students, with new institutions coming in all the time.
                    This organization would enable you to accelerate your aspirations by providing an opportunity to master the most desired skill-sets in today's market.
                    With hands-on guidance provided by our richly experienced faculty, you would be having  the best possible training at your disposal.
                </h4>
            </div>

            {/* 3rd section */}

            <div>
                <div style={{margin:'1% 8% 0 8%', textAlign:'center', backgroundColor:'#a4e5fe', borderRadius:'5px'}}>
                <h1 style={{color:'#212121', margin:'2rem 0'}} >Our Courses</h1>
                <div style={{display:'flex', flexDirection:"row", justifyContent:'space-evenly', flexWrap:'wrap', paddingBottom:"2rem"}}>
                    <Card style={{ width: '18rem', margin:'1rem 0', boxShadow:'4px 4px 20px -1px rgba(33,33,33,0.75)' }}>
                    <Card.Img variant="top" src={entre} />
                    <Card.Body>
                        <Card.Title>Entrepreneurship</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Know More</Button>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', margin:'1rem 0', boxShadow:'4px 4px 20px -1px rgba(33,33,33,0.75)' }}>
                    <Card.Img variant="top" src={dgtmkt} />
                    <Card.Body>
                        <Card.Title>Digital Marketing</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Know More</Button>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', margin:'1rem 0', boxShadow:'4px 4px 20px -1px rgba(33,33,33,0.75)' }}>
                    <Card.Img variant="top" src={promgt} />
                    <Card.Body>
                        <Card.Title>Project Management</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Know More</Button>
                    </Card.Body>
                    </Card>
                </div>
                
                <h1 style={{color:'#212121', margin:'2rem 0'}}  >Course Benefits</h1>
                <div style={{display:'flex', flexDirection:"row", justifyContent:'space-around', flexWrap:'wrap', paddingBottom:"2rem"}} >
                <Card style={{ width: '18rem', boxShadow:'4px 4px 20px -1px rgba(33,33,33,0.75)' }}>
                <Card.Body>
                    <Card.Header as="h5">Expert Teachers</Card.Header>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem', boxShadow:'4px 4px 20px -1px rgba(33,33,33,0.75)' }}>
                <Card.Body>
                    <Card.Header as="h5">Online Community</Card.Header>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem', boxShadow:'4px 4px 20px -1px rgba(33,33,33,0.75)' }}>
                <Card.Body>
                    <Card.Header as="h5">Flexible Curriculum</Card.Header>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
                </div>
            </div>
            </div>


            {/* 4th section */}

            <div style={{margin:'1% 8% 0 8%', backgroundColor:'#D9CAB3'}} >
                <Testimonial/>
            </div>

             {/* 5th section */}
             <div style={{margin:'5% 8% 0 8%'}} >
                <h1 style={{color:'#212121', margin:'2rem 0'}}  >Subscribe to our Newsletter</h1>
                <Contact/>
             </div>

        </>
    )
}

export default Home
 