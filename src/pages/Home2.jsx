import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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