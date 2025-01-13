import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import "./All1.css";

const Home2 = () => {

    const [products , setProducts] = useState([]);

    useEffect(() => {

        axios.get('https://dummyjson.com/products').then((response) => {
            console.log("response" , response)
            setProducts(response.data.products);
        }).catch((error) => {
            console.log("Error", error);
        })
    }, [])

    return (
      <div className="" style={{backgroundColor:"lightblue"}}>
         <Carousel>
         <Carousel.Item interval={500}>
      <img src="https://media.gq-magazine.co.uk/photos/66fd5f78b1b4af0b0bd1a13b/16:9/w_2580,c_limit/BlackFriday2024_Jessie_Atkinson_Fragrance_BlackFriday2.jpg" alt=""  style={{width:"100vw" , height:"90vh" }}/>
        <Carousel.Caption>
          {/* <h3 style={{color:"white", fontSize:"50px", padding:"90px 0px"}}>Fragnance</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src="https://beauty.pambianconews.com/wp-content/uploads/sites/27/2024/09/AMAZON.jpeg" alt=""  style={{width:"100vw" , height:"90vh"}}/>
        <Carousel.Caption>
          <h3 style={{color:"black", fontFamily:"sans-serif", fontSize:"50px"}}>Beauty Product</h3>
          <p style={{color:"black",}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, error.</p>
        </Carousel.Caption>
      </Carousel.Item>
      



      <Carousel.Item>
      <img src="https://cdn.pixabay.com/video/2024/12/28/249214_tiny.jpg" alt=""  style={{width:"100vw" , height:"90vh"}}/>
        <Carousel.Caption>
          <h3 style={{ fontFamily:"sans-serif", fontSize:"50px"}}>Furniture</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://t3.ftcdn.net/jpg/05/82/43/30/360_F_582433015_CNvrProaEUq9bZz3oIOCfqHhrI1vTwvk.jpg" alt=""  style={{width:"100vw" , height:"90vh"}}/>
        <Carousel.Caption>
          <h3 style={{fontFamily:"sans-serif",fontSize:"50px"}}>Grocery</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://img.freepik.com/premium-photo/set-skincare-products-arranged-aesthetically-background-4k-hd-photo_1193781-32365.jpg" alt=""  style={{width:"100vw" , height:"90vh"}}/>
        <Carousel.Caption>
          <h3 style={{ fontFamily:"sans-serif", fontSize:"50px"}}>Skin Care</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        <div className="container d-flex flex-wrap justify-content-center align-items-center gap-4 pt-4" style={{backgroundColor:"lightblue"}}>
          {products.map((ele, index) => (
            <Link
              to={`/detail/${ele?.id}`}
              key={index}
              style={{}}
              className="text-decoration-none"
            >
              <Card key={index} style={{ width: "18rem" }} className="shadow">
                <Card.Img variant="top" src={ele?.images[0]} height={300} />
                <Card.Body>
                  <Card.Title>{ele?.title}</Card.Title>
                  <Card.Text>
                    <h5 style={{ color: "black" }}>Rs: {ele?.price}$</h5>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          ))}
         
        </div>
        </div>
     
      
    )
}

export default Home2;