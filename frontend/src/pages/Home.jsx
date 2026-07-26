
import Navbar from '../components/Navbar.jsx';
import {LatestProducts, TrendingProducts} from '../components/Home/Trending.jsx';
import Ad from '../components/Home/Ad.jsx';
import HeroHeader from "../components/Home/HeroHeader.jsx";
import OurServices from '../components/Home/OurServices.jsx';
import Footer from '../components/Footer.jsx';

import CategorySlider from "../components/CategorySlider.jsx";
import BannerSlider from "../components/BannerSlider.jsx";

const Home = () => {
  return (
    <>
      <div className="">
        <Navbar/>
        <HeroHeader />
        <BannerSlider/>
        <Ad/>
        <CategorySlider/>
        <LatestProducts/>
        <TrendingProducts/>
        <OurServices/>
        <Footer/>
      </div>
    </>
  )
}

export default Home
