import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductCard({ flower }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <img src={flower.image} alt={flower.name} className="h-48 w-full object-cover rounded-lg" />
      <h3 className="mt-4 text-lg font-bold">{flower.name}</h3>
      <p className="text-green-700 font-semibold">${flower.price}</p>
      <button
        className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500"
        onClick={() => addToCart(flower)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
