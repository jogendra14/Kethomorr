import {
  FaBoxOpen,
  FaArrowRight,
  FaMedal,
  FaWallet,
  FaShippingFast,
  FaUsers,
  FaHeadset,
} from "react-icons/fa";

import interior from "../../assets/interiorDesign.jpg";
import installation from "../../assets/installation.jpeg";
import electrician from "../../assets/electrician.jpeg";
import architecture from "../../assets/architecture.jpg";

const services = [
  {
    title: "Interior Design",
    desc: "Get professional designs for your dream space.",
    img: interior,
  },
  {
    title: "Installation Service",
    desc: "Expert installation for lights, fans & more.",
    img: installation,
  },
  {
    title: "Electrician Service",
    desc: "Verified electricians at your service.",
    img: electrician,
  },
  {
    title: "Architecture Design",
    desc: "Modern & functional architecture solutions.",
    img: architecture,
  },
];

const features = [
  {
    icon: <FaBoxOpen />,
    title: "Wide Range",
    subtitle: "5000+ Products",
  },
  {
    icon: <FaMedal />,
    title: "Top Brands",
    subtitle: "100% Original",
  },
  {
    icon: <FaWallet />,
    title: "Secure Payments",
    subtitle: "Multiple Options",
  },
  {
    icon: <FaShippingFast />,
    title: "Fast Delivery",
    subtitle: "Across India",
  },
  {
    icon: <FaUsers />,
    title: "Trusted by 50K+",
    subtitle: "Happy Customers",
  },
  {
    icon: <FaHeadset />,
    title: "5 Star Support",
    subtitle: "Always Here for You",
  },
];

export default function OurServices() {
  return (
    <>
      {/* OUR SERVICES */}
      <section className="max-w-7xl mx-auto mt-6 px-3 sm:px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 uppercase">
          OUR SERVICES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden flex"
            >
              {/* Image */}
              <div className="w-2/5">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-40 sm:h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-3/5 p-3 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-sm mt-2">
                    {service.desc}
                  </p>
                </div>

                <button className="mt-4 flex items-center gap-2 text-red-600 font-semibold text-xs sm:text-sm hover:gap-3 transition-all">
                  BOOK NOW
                  <FaArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto py-6 px-3 sm:px-4">
        <div className="bg-[#111111] rounded-2xl border border-gray-700 overflow-hidden">

          {/* Heading */}
          <div className="px-5 sm:px-6 pt-5">
            <h2 className="text-white text-lg sm:text-xl font-bold uppercase">
              WHY CHOOSE <span className="text-red-600">KETHOMORR?</span>
            </h2>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 lg:divide-x divide-gray-700">

            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 p-5 text-center sm:text-left"
              >
                <div className="text-red-600 text-2xl sm:text-3xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-white font-semibold text-sm">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-xs">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}