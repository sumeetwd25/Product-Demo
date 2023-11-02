import './App.css';
import ProductList from './components/ProductList';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

function App() {
  return <Routes>

    <Route path="/" element={<ProductList></ProductList>}></Route>
    <Route path="/details" element={<ProductDetails></ProductDetails>}></Route>

  </Routes>
}

export default App;
