import { FaFacebookF, FaInstagram, FaPinterestP, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-gray-300 mt-5">
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & About */}
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-white">KETHO</span>
              <span className="text-red-600">MORR</span>
            </h2>

            <p className="text-sm text-gray-400 mt-4 leading-6">Your one-stop solution for all lighting, electrical and home decor needs.</p>

            <div className="flex gap-3 mt-5">
              <div className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:bg-red-600 cursor-pointer duration-300">
                <FaFacebookF />
              </div>

              <div className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:bg-red-600 cursor-pointer duration-300">
                <FaInstagram />
              </div>

              <div className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:bg-red-600 cursor-pointer duration-300">
                <FaPinterestP />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">QUICK LINKS</h3>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-red-500 cursor-pointer">About Us</li>
              <li className="hover:text-red-500 cursor-pointer">Shop</li>
              <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
              <li className="hover:text-red-500 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-red-500 cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-red-500 cursor-pointer">Return Policy</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">CUSTOMER SERVICE</h3>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-red-500 cursor-pointer">Track Order</li>
              <li className="hover:text-red-500 cursor-pointer">Shipping Policy</li>
              <li className="hover:text-red-500 cursor-pointer">Cancellation & Refund</li>
              <li className="hover:text-red-500 cursor-pointer">FAQs</li>
              <li className="hover:text-red-500 cursor-pointer">Support</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">CATEGORIES</h3>

            <ul className="space-y-2 text-sm">
              <li className="hover:text-red-500 cursor-pointer">Decorative Lights</li>
              <li className="hover:text-red-500 cursor-pointer">Ceiling Fans</li>
              <li className="hover:text-red-500 cursor-pointer">Geysers</li>
              <li className="hover:text-red-500 cursor-pointer">Louvers</li>
              <li className="hover:text-red-500 cursor-pointer">Wall Panels</li>
              <li className="hover:text-red-500 cursor-pointer">All Categories</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">CONTACT US</h3>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <FaPhoneAlt className="text-red-600 mt-1" />
                <span>+91 9079659815</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-red-600 mt-1" />
                <span>support@kethomorr.com</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-red-600 mt-1" />
                <span>Bangalore, Karnataka, India - 560001</span>
              </div>

              <div className="flex gap-3">
                <FaClock className="text-red-600 mt-1" />
                <span>Mon - Sat : 9:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t text-center border-gray-700 mt-10 pt-3 ">
          <p className="text-sm text-gray-400">© 2024 Kethomorr. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
