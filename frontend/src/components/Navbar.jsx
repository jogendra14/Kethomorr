import logo from "../assets/logo.png";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Cart from "../pages/Cart.jsx";
import SignUp from "../pages/SignUp.jsx";

import { useState } from "react";
import { UserCircle2, ChevronDown, User, Package, Heart, Store, Gift, Bell, Headphones, Megaphone, Sparkles } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { icon: <User size={20} />, title: "My Profile", url: "/login" },
    { icon: <Sparkles size={20} />, title: "Flipkart Plus Zone", url: "/login" },
    { icon: <Package size={20} />, title: "Orders", url: "/login" },
    { icon: <Heart size={20} />, title: "Wishlist", url: "/login" },
    { icon: <Store size={20} />, title: "Become a Seller", url: "/login" },
    { icon: <Gift size={20} />, title: "Rewards", url: "/login" },
    { icon: <Gift size={20} />, title: "Gift Cards", url: "/login" },
    { icon: <Bell size={20} />, title: "Notification Preferences", url: "/login" },
    { icon: <Headphones size={20} />, title: "24x7 Customer Care", url: "/login" },
    { icon: <Megaphone size={20} />, title: "Advertise", url: "/login" },
  ];

  return (
    <>
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
          {/* Top Row */}
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/">
              <img src={logo} alt="logo" className="w-12 md:w-14 object-contain" />
            </Link>

            {/* Search (Desktop) */}
            <div className="hidden lg:flex items-center flex-1 max-w-2xl bg-white rounded-xl px-4 py-2 shadow-md border mx-8">
              <input type="text" placeholder="Search products..." className="w-full outline-none bg-transparent" />
              <FaSearch className="text-gray-500 cursor-pointer hover:text-black" />
            </div>

            {/* Right */}
            <div className="relative flex items-center gap-4 md:gap-6">
              {/* Login */}
              <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                <Link to="/login" onClick={Login} className="flex items-center gap-2 hover:text-blue-600">
                  <UserCircle2 size={22} />
                  <span className="hidden md:block">Login</span>
                  <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
                </Link>

                {open && (
                  <div className="absolute right-0 mt-2 w-64 md:w-72 py-3 bg-white rounded-md shadow-xl overflow-hidden z-50">
                    <Link to="/signUp" onClick={SignUp} className="flex justify-between px-6 py-2 border-b">
                      <span className="hover:text-blue-600">New customer?</span>
                      <span className="text-blue-600 font-bold">Sign Up</span>
                    </Link>

                    <div>
                      {menuItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.url}
                          onClick={Login}
                          className="flex items-center gap-4 px-5 py-2 hover:bg-gray-100 transition text-gray-700"
                        >
                          <span>{item.icon}</span>
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Cart */}
              <Link to="/Cart" onClick={Cart} className="flex items-center gap-2 hover:text-blue-600">
                <FaShoppingCart size={22} />
                <span className="hidden md:block">Cart</span>
              </Link>
            </div>
          </div>

          {/* Search (Mobile & Tablet) */}
          <div className="mt-3 lg:hidden">
            <div className="flex items-center bg-white rounded-xl px-4 py-2 shadow-md border">
              <input type="text" placeholder="Search products..." className="w-full outline-none bg-transparent" />
              <FaSearch className="text-gray-500 cursor-pointer hover:text-black" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
