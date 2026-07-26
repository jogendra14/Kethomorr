import { FaBoxOpen, FaArrowRight, FaMedal, FaWallet, FaShippingFast, FaUsers, FaHeadset } from "react-icons/fa";
import interior from '../../assets/interiorDesign.jpg';
import installation from '../../assets/installation.jpeg';
import electrician from '../../assets/electrician.jpeg';
import architecture from '../../assets/architecture.jpg';

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
    {/*Our Services*/}    
      <section className="max-w-7xl mx-auto mt-5">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 uppercase">OUR SERVICES</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden flex">
              {/* Image */}
              <div className="w-2/5">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="w-3/5 pl-3 py-2 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{service.title}</h3>

                  <p className="text-gray-500 text-sm mt-2">{service.desc}</p>
                </div>

                <button className="mt-4 flex items-center gap-2 text-red-600 font-semibold text-sm hover:gap-3 transition-all">
                  BOOK NOW
                  <FaArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*Why choose Us */}
      <section className="max-w-7xl mx-auto pt-4">
        <div className="bg-[#111111] rounded-2xl border border-gray-700">
          {/* Heading */}
          <div className="px-6 pt-5">
            <h2 className="text-white text-xl font-bold uppercase">
              WHY CHOOSE <span className="text-red-600">KETHOMORR?</span>
            </h2>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 lg:divide-x divide-gray-700">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-5 justify-center">
                <div className="text-red-600 text-3xl">{item.icon}</div>

                <div>
                  <h3 className="text-white font-semibold text-sm">{item.title}</h3>

                  <p className="text-gray-400 text-xs">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
