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
    <div className=" bg-white rounded-lg shadow-md p-2 md:p-4 ">
      <h2 className="text-md md:text-lg font-bold">Filters</h2>

      <div>
        <div className="">
          {categories.map((category) => (
            <div key={category.name}>
              {/* Main Category Button */}
              <button
                onClick={() => toggleCategory(category.name)}
                className=" my-2 md:my-3 lg:my-4 w-24 sm:w-35 md:w-43 lg:w-54 flex items-center justify-between mx-1.5 md:ml-2 lg:ml-4 rounded-lg hover:bg-gray-100 transition-colors text-left"
              >
                <span className="text-gray-700 text-[13px] md:text-md lg:text-[16px]">{category.name}</span>
                <ChevronDown
                  className={`text-gray-600 size-3.5 md:size-4 lg:size-5 transition-transform duration-300 ${expandedCategory === category.name ? "rotate-180" : ""}`}
                />
              </button>

              {/* Subcategories - Collapsible */}
              {expandedCategory === category.name && (
                <div className="text-[11px] md:text-sm lg:text-md ml-1.5 md:ml-2.5 lg:ml-4 border-l-2 border-gray-200">
                  {category.subcategories.map((subcategory) => (
                    <button
                      key={subcategory}
                      className="block w-full text-left ml-1.5 md:ml-2.5 lg:ml-4 my-2 lg:my-3  text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
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
