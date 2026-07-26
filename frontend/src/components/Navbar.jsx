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
      <nav className="flex items-center justify-between pl-4 pr-8  bg-white">
        {/* Logo */}
        <img src={logo} alt="logo" className="w-14" />

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white rounded-xl ml-35 px-4 py-2 shadow-md border">
          <input type="text" placeholder="Search products..." className="  outline-none bg-transparent w-120" />
          <FaSearch className="text-gray-500 cursor-pointer hover:text-black" />
        </div>

        <div className="relative flex items-center gap-6">
          <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            {/* Login */}
            <Link to="/login" className=" relative flex items-center gap-2 hover:text-blue-600" onClick={Login}>
              <UserCircle2 size={22} />
              <span className="">Login</span>
              <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
            </Link>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 w-70 py-3 bg-white rounded-sm shadow-xl overflow-hidden z-50">
                {/* Top Section */}
                
                  <Link to="/signUp" onClick={SignUp} className="flex justify-between px-6 py-2"> 
                    <span className="hover:text-blue-600">New customer?</span>
                    <span className="text-blue-600 font-bold">Sign Up</span>
                  </Link>
                  
                {/* Menu */}
                <div>
                  {menuItems.map((item, index) => (
                    <Link to={item.url} onClick={Login} key={index} className="w-full flex items-center gap-4 px-5 py-2 hover:bg-gray-100 transition text-gray-700">
                      <span className="text-gray-600">{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/Cart" className="flex hover:text-blue-600" onClick={Cart}>
            <FaShoppingCart size={22} />
            <span>Cart</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
