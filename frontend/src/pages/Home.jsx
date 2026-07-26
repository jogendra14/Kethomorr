
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Home/Hero.jsx';
import {LatestProducts, TrendingProducts} from '../components/Home/Trending.jsx';
import Ad from '../components/Home/Ad.jsx';

import OurServices from '../components/Home/OurServices.jsx';
import Footer from '../components/Footer.jsx';



const Home = () => {
  return (
    <>
      <div className='m-0 p-0'>
        <Navbar/>
        <Hero/>
        <Ad/>
        <LatestProducts/>
        <TrendingProducts/>
        <OurServices/>
        <Footer/>
      </div>
    </>
  )
}

export default Home
