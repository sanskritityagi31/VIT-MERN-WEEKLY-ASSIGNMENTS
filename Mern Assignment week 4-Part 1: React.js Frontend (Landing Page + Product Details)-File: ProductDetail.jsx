import React from 'react';

const ProductDetail = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white p-6 rounded shadow max-w-md w-full">
        <button className="float-right text-red-500" onClick={onClose}>X</button>
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <img src={product.image} alt={product.name} className="w-full mb-4" />
        <p>{product.description}</p>
        <p className="text-green-600 font-semibold mt-2">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
