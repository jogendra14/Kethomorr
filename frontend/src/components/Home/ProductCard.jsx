import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all px-3 py-2 my-2 w-57">
      <div className="relative">
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">{product.discount}</span>

        <img src={product.image} alt="" className="h-37 w-full object-contain" />
      </div>

      <h2 className="font-semibold text-sm mt-3 line-clamp-2">{product.name}</h2>

      <div className="flex items-center gap-1 mt-2">
        <FaStar className="text-yellow-500 text-sm" />

        <span className="text-sm">{product.rating}</span>
      </div>

      <div className="flex items-center gap-2 mt-1">
        <h3 className="font-bold text-xl">₹{product.price}</h3>

        <span className="text-gray-400 line-through text-sm">₹{product.oldPrice}</span>
      </div>

      <button className="mt-3 w-full border border-red-500 text-red-600 rounded-lg py-1.5 flex justify-center items-center gap-2 hover:bg-red-600 hover:text-white duration-300">
        <FaShoppingCart />
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
