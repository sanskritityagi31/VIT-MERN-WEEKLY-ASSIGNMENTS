import React, { useState } from 'react';
import './index.css'; // Tailwind
import ProductDetail from './ProductDetail';

const products = [
  { id: 1, name: 'Wireless Headphones', price: '$99', image: 'https://via.placeholder.com/150', description: 'High-quality wireless sound.' },
  { id: 2, name: 'Smart Watch', price: '$149', image: 'https://via.placeholder.com/150', description: 'Track your fitness and health.' },
  { id: 3, name: 'Bluetooth Speaker', price: '$79', image: 'https://via.placeholder.com/150', description: 'Crisp and powerful sound.' },
];

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">My Store</h1>
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="bg-blue-100 p-8 text-center">
        <h2 className="text-3xl font-bold">Welcome to the Future of Shopping</h2>
        <p className="text-gray-700 mt-2">Explore our trending gadgets and gear</p>
      </section>

      {/* Product Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full mb-2" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-green-600">{product.price}</p>
            <button
              className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => setSelectedProduct(product)}
            >
              View Details
            </button>
          </div>
        ))}
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4 text-center mt-8">
        <p>Follow us on:
          <a href="#" className="mx-2 text-blue-400">Twitter</a>
          <a href="#" className="text-pink-400">Instagram</a>
        </p>
      </footer>
    </>
  );
};

export default App;

