import { Link } from "react-router-dom";
import Home from "../../pages/Home";
import Product from "../../pages/Product";
import Deal from "../../pages/Deal.jsx";

const HeroHeader = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto">

        {/* Responsive Menu */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex items-center justify-start md:justify-center min-w-max text-xs sm:text-sm md:text-base font-semibold">

            <Link
              to="/"
              className="hover:text-blue-600 whitespace-nowrap"
              onClick={Home}
            >
              <span className="block px-4 sm:px-5 md:px-6 py-3 md:py-4 hover:text-red-500">
                HOME
              </span>
            </Link>

            <Link
              to="/Product"
              className="hover:text-blue-600 whitespace-nowrap"
              onClick={Product}
            >
              <span className="block px-4 sm:px-5 md:px-6 py-3 md:py-4 hover:text-red-500">
                SHOP
              </span>
            </Link>

            <Link
              to="/Deal"
              className="hover:text-blue-600 whitespace-nowrap"
              onClick={Deal}
            >
              <span className="block px-4 sm:px-5 md:px-6 py-3 md:py-4 hover:text-red-500">
                DEALS
              </span>
            </Link>

            <Link
              to="/"
              className="hover:text-blue-600 whitespace-nowrap"
              onClick={Home}
            >
              <span className="block px-4 sm:px-5 md:px-6 py-3 md:py-4 hover:text-red-500">
                INSPIRATION
              </span>
            </Link>

            <Link
              to="/"
              className="hover:text-blue-600 whitespace-nowrap"
              onClick={Home}
            >
              <span className="block px-4 sm:px-5 md:px-6 py-3 md:py-4 hover:text-red-500">
                CONTACT US
              </span>
            </Link>

            <Link
              to="/"
              className="hover:text-blue-600 whitespace-nowrap"
              onClick={Home}
            >
              <span className="block px-4 sm:px-5 md:px-6 py-3 md:py-4 hover:text-red-500">
                ABOUT US
              </span>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroHeader;