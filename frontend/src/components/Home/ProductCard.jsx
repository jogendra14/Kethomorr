import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className= "my-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all px-3 py-2 w-auto">
      <div className="relative">
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">{product.discount}</span>

        <img src={product.image} alt="" className=" h-25 sm:h-31 md:h-38 lg:h-45 w-full object-contain" />
      </div>

      <h2 className="text-sm sm:text-md md:text-lg mt-3 line-clamp-2">{product.name}</h2>

      <div className="flex items-center gap-1 mt-2">
        <FaStar className="text-yellow-500 text-sm" />

        <span className="text-sm">{product.rating}</span>
      </div>

      <div className="flex items-center gap-2 mt-1">
        <h3 className="font-bold text-md sm:text-lg ">₹{product.price}</h3>

        <span className="text-gray-400 line-through text-md sm:text-lg">₹{product.oldPrice}</span>
      </div>

      <button className="mt-1 w-full border border-red-400 text-red-600 rounded-lg py-0.5 hover:bg-blue-600 hover:text-white duration-300">
        
        <span className="text-sm sm:text-md md:text-lg" >Buy</span>
      </button>
    </div>
  );
};

export default ProductCard;
