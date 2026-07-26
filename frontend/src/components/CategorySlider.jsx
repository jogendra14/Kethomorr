import {
  FaMobileAlt,
  FaLaptop,
  FaTshirt,
  FaHome,
  FaAppleAlt,
  FaGamepad
} from "react-icons/fa";

const categories = [
  { name: "For You", icon: <FaHome /> },
  { name: "Fashion", icon: <FaTshirt /> },
  { name: "Mobiles", icon: <FaMobileAlt /> },
  { name: "Electronics", icon: <FaLaptop /> },
  { name: "Beauty", icon: <FaAppleAlt /> },
  { name: "Home", icon: <FaHome /> },
  { name: "Gaming", icon: <FaGamepad /> },
];

export default function CategorySlider() {
  return (
    <div className="bg-white shadow-sm">

      <div className="flex overflow-x-auto no-scrollbar">

        {categories.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center min-w-22.5 py-3 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
              {item.icon}
            </div>

            <p className="text-sm mt-2 whitespace-nowrap">
              {item.name}
            </p>

            {i === 0 && (
              <div className="mt-2 w-16 h-1 rounded-full bg-blue-600"></div>
            )}
          </div>
        ))}

      </div>

    </div>
  );
}