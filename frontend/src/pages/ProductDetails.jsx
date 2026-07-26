import Navbar from "../components/Navbar";
import ProductGallery from "../components/Shop/ProductGallery";
import ProductInfo from "../components/Shop/ProductInfo";
import ReviewSection from "../components/Shop/ReviewSection";
import RelatedProducts from "../components/Shop/RelatedProducts";
import Footer from "../components/Footer";

export default function ProductDetails() {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-5 text-sm text-gray-500">
        Home
        <span className="mx-2">/</span>
        Jackets
        <span className="mx-2">/</span>
        <span className="text-black font-medium">
          Windbreaker Jacket
        </span>
      </div>

      {/* Product */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10">

          <ProductGallery />

          <ProductInfo />

        </div>

      </div>

      {/* Reviews */}
      <div className="max-w-7xl mx-auto px-6 mt-0">
        <ReviewSection />
      </div>

      {/* Related Products */}

      <div className="max-w-7xl mx-auto px-6 ">
        <RelatedProducts />
      </div>

    </div>
  <Footer/>
  </>
  );
}