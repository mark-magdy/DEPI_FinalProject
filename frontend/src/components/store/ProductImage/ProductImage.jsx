const ProductImage = ({ image, alt }) => (
  <div className="product-image">
    <img src={image} alt={alt} onError={(e) => {
              e.target.src =
                "https://www.cinna.fr/images/fallback.jpg";
            }}/>
  </div>
);

export default ProductImage;
