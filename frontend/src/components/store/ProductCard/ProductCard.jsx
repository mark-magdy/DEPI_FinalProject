// import React, { useState } from "react";
// import { Card, Button, Badge } from "react-bootstrap";
// import { FaShoppingCart, FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
// import "./ProductCard.css";

// const ProductCard = ({ product, onAddToCart, disabled }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [isAdding, setIsAdding] = useState(false);

//   const handleAddToCart = async () => {
//     setIsAdding(true);
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API call
//       onAddToCart();
//     } finally {
//       setIsAdding(false);
//     }
//   };

//   return (
//     <Card
//       className={`product-card ${isHovered ? "hovered" : ""} ${
//         disabled ? "out-of-stock" : ""
//       }`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {product.stock < 5 && product.stock > 0 && (
//         <Badge bg="warning" className="stock-badge">
//           Only {product.stock} left!
//         </Badge>
//       )}
//       {product.stock === 0 && (
//         <Badge bg="danger" className="stock-badge">
//           Out of stock
//         </Badge>
//       )}

//       <div className="product-image-container">
//         <Card.Img
//           variant="top"
//           src={product.image}
//           alt={product.name}
//           onError={(e) => {
//             e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
//           }}
//         />

//         <Button
//           variant="primary"
//           className="add-to-cart-btn"
//           onClick={handleAddToCart}
//           disabled={disabled || isAdding}
//         >
//           {isAdding ? (
//             <>
//               <span
//                 className="spinner-border spinner-border-sm me-2"
//                 role="status"
//                 aria-hidden="true"
//               ></span>
//               Adding...
//             </>
//           ) : (
//             <>
//               <FaShoppingCart className="me-2" />
//               {disabled ? "Out of stock" : "Add to cart"}
//             </>
//           )}
//         </Button>

//         <Button
//           variant="light"
//           className="wishlist-btn"
//           onClick={() => setIsWishlisted(!isWishlisted)}
//         >
//           {isWishlisted ? <FaHeart className="text-danger" /> : <FaRegHeart />}
//         </Button>
//       </div>

//       <Card.Body>
//         <div className="product-rating">
//           <FaStar className="star-icon" />
//           <span>{product.rating}</span>
//           <span className="review-count">({product.reviews} reviews)</span>
//         </div>

//         <Card.Title className="product-title">{product.name}</Card.Title>
//         <Card.Text className="product-description">
//           {product.description}
//         </Card.Text>

//         <div className="product-footer">
//           <span className="product-price">{product.price.toFixed(2)} EGP</span>
//           {product.price > 50 && (
//             <Badge bg="success" className="free-shipping">
//               Free Shipping
//             </Badge>
//           )}
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };

// export default ProductCard;



// ProductCard.jsx
import React, { useState } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart, disabled }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async (e) => {
    e.stopPropagation(); // prevent triggering the Link
    e.preventDefault();
    setIsAdding(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API call
      onAddToCart();
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <Link
      to={`/product/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card
        className={`product-card ${isHovered ? "hovered" : ""} ${
          disabled ? "out-of-stock" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Stock Badges */}
        {product.stock < 5 && product.stock > 0 && (
          <Badge bg="warning" className="stock-badge">
            Only {product.stock} left!
          </Badge>
        )}
        {product.stock === 0 && (
          <Badge bg="danger" className="stock-badge">
            Out of stock
          </Badge>
        )}

        {/* Product Image + Buttons */}
        <div className="product-image-container">
          <Card.Img
            variant="top"
            src={product.image ||"https://www.cinna.fr/images/fallback.jpg"}
            alt={product.name}
            onError={(e) => {
              e.target.src =
                "https://www.cinna.fr/images/fallback.jpg";
            }}
          />

          {/* Add to Cart */}
          <Button
            variant="primary"
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={disabled || isAdding}
          >
            {isAdding ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Adding...
              </>
            ) : (
              <>
                <FaShoppingCart className="me-2" />
                {disabled ? "Out of stock" : "Add to cart"}
              </>
            )}
          </Button>

          {/* Wishlist */}
          <Button
            variant="light"
            className="wishlist-btn"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsWishlisted(!isWishlisted);
            }}
          >
            {isWishlisted ? (
              <FaHeart className="text-danger" />
            ) : (
              <FaRegHeart />
            )}
          </Button>
        </div>

        {/* Product Details */}
        <Card.Body>
          <div className="product-rating">
            <FaStar className="star-icon" />
            <span>{product.rating}</span>
            <span className="review-count">({product.reviews} reviews)</span>
          </div>

          <Card.Title className="product-title">{product.name}</Card.Title>
          <Card.Text className="product-description">
            {product.description}
          </Card.Text>

          <div className="product-footer">
            <span className="product-price">{product.price.toFixed(2)} EGP</span>
            {product.price > 50 && (
              <Badge bg="success" className="free-shipping">
                Free Shipping
              </Badge>
            )}
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductCard;
