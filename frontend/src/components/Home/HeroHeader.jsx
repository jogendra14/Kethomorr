import { Link } from "react-router-dom";
import Home from "../../pages/Home";
import Product from "../../pages/Product";
import Deal from "../../pages/Deal.jsx";

const HeroHeader = () => {

  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Menu */}
        <div className="flex flex-1 justify-center items-center text-sm font-semibold">
          <Link to="/" className="flex items-center gap-2 hover:text-blue-600" onClick={Home}>
            <span className="px-6 py-4 cursor-pointer hover:text-red-500">HOME</span>
          </Link>

          <Link to="/Product" className="flex items-center gap-2 hover:text-blue-600" onClick={Product}>
            <span className="px-6 py-4 cursor-pointer hover:text-red-500">SHOP</span>
          </Link>

          <Link to="/Deal" className="flex items-center gap-2 hover:text-blue-600" onClick={Deal}>
            <span className="px-6 py-4 cursor-pointer hover:text-red-500">DEALS</span>
          </Link>

          <Link to="/" className="flex items-center gap-2 hover:text-blue-600" onClick={Home}>
            <span className="px-6 py-4 cursor-pointer hover:text-red-500">INSPIRATION</span>
          </Link>

          <Link to="/" className="flex items-center gap-2 hover:text-blue-600" onClick={Home}>
            <span className="px-6 py-4 cursor-pointer hover:text-red-500">CONTACT US</span>
          </Link>

          <Link to="/" className="flex items-center gap-2 hover:text-blue-600" onClick={Home}>
            <span className="px-6 py-4 cursor-pointer hover:text-red-500">ABOUT US</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
