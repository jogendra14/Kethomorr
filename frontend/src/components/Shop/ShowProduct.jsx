import { Heart, ShoppingCart, Star } from "lucide-react";

export default function ShowProduct({ product }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl duration-300 overflow-hidden group">
      <div className="relative">
        <img src={product.images[0]} alt="" className="h-64 w-full object-cover" />

        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">{product.discount}% OFF</span>

        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
          <Heart size={18} />
        </button>
      </div>

      <div className="p-3 overflow-hidden">
        <h2 className="font-semibold text-lg line-clamp-2 min-h-14">{product.name}</h2>

        <div className="flex items-center gap-1 mt-1">
          <Star fill="gold" color="gold" size={18} />
          <span>{product.rating}</span>
        </div>

        <div className="mt-1">
          <span className="text-blue-700 text-xl font-bold">₹{product.price}</span>

          <span className="line-through ml-3 text-gray-400">₹{product.oldPrice}</span>
        </div>

        <button className="w-full mt-3 text-gray-700 border border-gray-800 hover:bg-blue-700 py-1 rounded-lg flex justify-center gap-2">
          <ShoppingCart size={20} />
          Add To Cart
        </button>
        <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-1 rounded-lg">
          Buy
        </button>
      </div>
    </div>
  );
}
