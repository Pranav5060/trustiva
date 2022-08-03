import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


function Carousal() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/delivery-mover-standing-carrying-box-picture-id1307016386?b=1&k=20&m=1307016386&s=170667a&w=0&h=8v0AK6-o0ZKU2HEf4Vt6VkkBwumwXIm4BHvb8n07JV4="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/male-movers-carrying-shelving-unit-male-movers-carrying-shelving-unit-new-house-125849215.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/03/71/55/57/360_F_371555765_5b7ab4HnHB8qz1HyoGDIEQC0hg1DlM4g.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Link to={'/signup'}>
    <Card style={{ width: '18rem',margin:"10px",color:"black"}} className="btn btn stretched-link mx-auto shadow5" href='/signup' bg='grey'>
      <Card.Img variant="top" src="https://www.bestmoversuae.com/wp-content/uploads/2017/12/Local-movers-Packers.jpg" />
      <Card.Body>
        <Card.Title>Our Services</Card.Title>
        <Card.Text>
          Packing and Moving
        </Card.Text>
        <Button variant="primary" className='shadow5'>Book Now</Button>  
      </Card.Body>
    </Card>
    </Link>
    </div>
  );
}

export default Carousal;