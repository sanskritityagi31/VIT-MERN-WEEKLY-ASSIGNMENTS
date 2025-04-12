import React from 'react';

const products = [
  { id: 1, name: 'Product A', price: '$20', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product B', price: '$30', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product C', price: '$40', image: 'https://via.placeholder.com/150' },
];

function App() {
  return (
    <div>
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <div className="text-xl font-bold">MyStore</div>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Products</a>
        </div>
      </nav>

      <header className="bg-blue-100 text-center py-10">
        <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
        <p className="mt-2 text-lg">Discover amazing products below</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.name} className="w-full mb-2" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
          </div>
        ))}
      </section>

      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        <p>Follow us:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
