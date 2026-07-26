import {useState, useEffect} from 'react'
import ShowProduct from "../components/Shop/ShowProduct.jsx";
import FilterSidebar from "../components/Shop/FilterSideBar.jsx";
import Navbar from "../components/Navbar";
import HeroHeader from '../components/Home/HeroHeader.jsx'
import Footer from "../components/Footer";


export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect( () => {
      fetch(`${import.meta.env.VITE_API_URL}/products`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setProducts(data);
    })
    .catch((err) => console.log(err));
}, []);
    
  
  return (
    <>
      <Navbar />
      <HeroHeader/>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto p-5">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <FilterSidebar />
            </div>

            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {products.map((product) => (
                  <ShowProduct key={product._id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
