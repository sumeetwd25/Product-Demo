import styled from 'styled-components';

const ProductCardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  width: 200px;
  height: 400px;
  display: inline-block;
  vertical-align: top;
`;

const ProductCard = ({ product, onDetailsClick }) => {
  const { name, imageUrl, miniDescription, price } = product;

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} style={{ width: '150px', height: '200px' }} />
      <h3>{name}</h3>
      <p>{miniDescription}</p>
      <p>Price: Rs.{price}</p>
      <button onClick={() => onDetailsClick(product)}>Details</button>
    </ProductCardContainer>
  );
};

export default ProductCard;
