 const ads = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?w=600",
      brand: "Minara",
      price: "From ₹118",
      title: "Makeup accessories",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600",
      brand: "TCL",
      price: "Just ₹42,940*",
      title: "Upgrade your view",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600",
      brand: "Voltas",
      price: "Up to 40% Off",
      title: "Powerful cooling",
    },
  ];
    

const Ad = () => {
  return (
    <div>
     <section className="bg-white py-4 max-w-7xl mx-auto">
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {ads.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              {/* Image */}
              <div className="relative  rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-70 object-cover rounded-2xl"
                />
                {/* AD Badge */}
                <span className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  AD
                </span>

                {/* Logo */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-t-lg">
                  <span className="text-3xl font-bold text-red-600">
                    {item.brand}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="text-center mt-2">
                <h3 className="text-2xl font-bold">
                  {item.price}
                </h3>

                <p className="text-gray-600 text-lg">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Ad
