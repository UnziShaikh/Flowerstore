import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-green-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Flower Store</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link to="/shop" className="hover:text-gray-200">Shop</Link></li>
          <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
          <li><Link to="/cart" className="hover:text-gray-200 flex items-center"><FaShoppingCart className="mr-2" /> Cart</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
