
import Navbar from '../component/Navbar';
import Header from '../component/Header';
import Modal from '../component/Modal';
import BannerHero from '../component/BannerHero';
import Categories from '../component/Categories';
import FeaturedProducts from '../component/FeaturedProducts';
import Footer from '../component/Footer';

function App() {
  

  return (
    <>
  <Navbar />
  {/* Close Top Nav */}
  {/* Header */}
  <Header />
  {/* Close Header */}
  {/* Modal */}
  <Modal />
  {/* Start Banner Hero */}
  <BannerHero />
  {/* End Banner Hero */}
  {/* Start Categories of The Month */}
  <Categories />
  {/* End Categories of The Month */}
  {/* Start Featured Product */}
  <FeaturedProducts />
  {/* End Featured Product */}
  {/* Start Footer */}
  <Footer />
    </>
  )
}

export default App
