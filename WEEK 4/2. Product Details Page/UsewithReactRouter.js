import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import ProductDetails from './ProductDetails';

<Router>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/product/:id" element={<ProductDetails />} />
  </Routes>
</Router>
