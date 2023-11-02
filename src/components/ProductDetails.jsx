import React from 'react';
import styled from 'styled-components';

const ProductDetailsContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
`;

const ProductDetails = ({ product, onClose }) => {
  const { name, imageUrl, description, price } = product;

  return (
    <ProductDetailsContainer>
      <h1>Product Details</h1>
      <img src={imageUrl} alt={name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
      <h3>{name}</h3>
      <p><b>Description:</b> {description}</p>
      <p><b>Price:</b> Rs.{price}</p>
      <button onClick={onClose}>Close</button>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
