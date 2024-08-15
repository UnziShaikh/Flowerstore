import ProductCard from './ProductCard';
import { flowers } from '../data';

function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {flowers.map((flower) => (
        <ProductCard key={flower.id} flower={flower} />
      ))}
    </div>
  );
}

export default ProductList;
