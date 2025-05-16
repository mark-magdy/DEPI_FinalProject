const ProductInfo = ({ name, price, description, category, stock }) => (
  <div className="product-info">
    <h2>{name}</h2>
    <p className="price">${price.toFixed(2)}</p>
    <p className="description">{description}</p>
    <p><strong>Category:</strong> {category}</p>
    <p><strong>Stock:</strong> {stock}</p>
  </div>
);

export default ProductInfo;
