import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FilterSideBar() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const categories = [
    {
      name: "Lighting",
      subcategories: ["LED Bulbs", "Ceiling Lights", "Table Lamps", "Wall Lights"],
    },
    {
      name: "Fans",
      subcategories: ["Ceiling Fans", "Table Fans", "Pedestal Fans", "Tower Fans"],
    },
    {
      name: "Appliances",
      subcategories: ["Refrigerators", "Washing Machines", "Microwaves", "Ovens"],
    },
    {
      name: "Electricals",
      subcategories: ["Switches", "Outlets", "Wiring", "Circuit Breakers"],
    },
    {
      name: "Smart Home",
      subcategories: ["Smart Lights", "Smart Locks", "Smart Speakers", "Smart Plugs"],
    },
    {
      name: "Safety & Security",
      subcategories: ["Smoke Detectors", "Security Cameras", "Door Alarms", "Fire Extinguishers"],
    },
    {
      name: "Others",
      subcategories: ["Accessories", "Tools", "Spare Parts"],
    },
  ];

  const toggleCategory = (categoryName) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <div className=" bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      <div>
        <h3 className="text-lg font-semibold mb-2">Category</h3>

        <div className="">
          {categories.map((category) => (
            <div key={category.name}>
              {/* Main Category Button */}
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
              >
                <span className="font-medium text-gray-800">{category.name}</span>
                <ChevronDown
                  size={20}
                  className={`text-gray-600 transition-transform duration-300 ${expandedCategory === category.name ? "rotate-180" : ""}`}
                />
              </button>

              {/* Subcategories - Collapsible */}
              {expandedCategory === category.name && (
                <div className="pl-4 space-y-2 mt-2 border-l-2 border-gray-200">
                  {category.subcategories.map((subcategory) => (
                    <button
                      key={subcategory}
                      className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {subcategory}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
