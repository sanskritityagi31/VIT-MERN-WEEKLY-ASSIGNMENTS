import React from 'react';
import { useParams } from 'react-router-dom';

const productData = {
  1: { name: 'Product A', price: '$20', description: 'Description for A' },
  2: { name: 'Product B', price: '$30', description: 'Description for B' },
  3: { name: 'Product C', price: '$40', description: 'Description for C' },
};

function ProductDetails() {
  const { id } = useParams();
  const product = productData[id];

  if (!product) return <p className="p-4">Product not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl mt-2">{product.price}</p>
      <p className="mt-4">{product.description}</p>
    </div>
  );
}

export default ProductDetails;
