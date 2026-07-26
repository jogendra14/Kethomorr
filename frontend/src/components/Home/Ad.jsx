const ads = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?w=600",
    brand: "Minara",
    price: "From ₹118",
    title: "Makeup accessories",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600",
    brand: "TCL",
    price: "Just ₹42,940*",
    title: "Upgrade your view",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600",
    brand: "Voltas",
    price: "Up to 40% Off",
    title: "Powerful cooling",
  },
];

const Ad = () => {
  return (
    <section className="bg-white py-4 px-3 sm:px-4 lg:px-0 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {ads.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />

              {/* AD Badge */}
              <span className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                AD
              </span>

              {/* Brand */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white px-4 sm:px-6 py-2 rounded-t-lg shadow">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600 whitespace-nowrap">
                  {item.brand}
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="text-center mt-3">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                {item.price}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ad;