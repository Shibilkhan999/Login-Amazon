
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import "./All1.css"; 

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => setProductDetail(response?.data))
      .catch((error) => console.error("Error:", error));
  }, [id]);

  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => counter > 1 && setCounter(counter - 1);

  return (
    <div className="product-detail-container">
      {/* Main Product Card */}
      <div className="product-card">
        <div className="row">
          {/* Image Section */}
          <div className="col-md-6 text-center">
            <img
              src={productDetail?.thumbnail || "placeholder-image.jpg"}
              alt={productDetail?.title}
              className="product-image"
            />
          </div>

          {/* Product Details Section */}
          <div className="col-md-6">
            <h1 className="product-title">{productDetail?.title || "Product Title"}</h1>
            <h3 className="product-price">₹{productDetail?.price || "0.00"}</h3>
            <Rating
              value={productDetail?.rating || 0}
              precision={0.5}
              readOnly
              className="product-rating"
            />
            <p className="product-description">{productDetail?.description || "No description available."}</p>

            <div className="product-meta">
              <p>Material: {productDetail?.material || "Ceramic"}</p>
              <p>Size: {productDetail?.size || "7.1 inches"}</p>
              <p>Stock: {productDetail?.stock || "Out of Stock"}</p>
            </div>

            {/* Quantity Selector */}
            <div className="quantity-selector">
              <button onClick={decreaseCounter} className="btn btn-outline-secondary">-</button>
              <span className="counter">{counter}</span>
              <button onClick={increaseCounter} className="btn btn-outline-secondary">+</button>
              <button className="btn btn-primary add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      {productDetail?.reviews?.length > 0 && (
        <div className="reviews-section">
          <h3>Customer Reviews</h3>
          {productDetail.reviews.map((review, index) => (
            <div key={index} className="review-card">
              <h4>{review.reviewerName}</h4>
              <Rating value={review.rating} precision={0.5} readOnly />
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

