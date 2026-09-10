import NavBar from '../Components/Navbar/NavBar.jsx'
import Hero from '../Components/Hero/Hero.jsx'
import Cards from '../Components/Cards/Cards.jsx'
import Footer from '../Components/Footer/Footer.jsx'
import Feature from '../Components/Feature/Feature.jsx'
function Home() {

  return (
    <>
    <div className='home-container'>
      <NavBar />
      <Hero />
      <Cards />
      <Feature />
      <Footer />
      </div>
    </>
  )
}

export default Home
