import Tracks from '../components/Tracks'
import Judges from '../components/judges'
import Prizes from '../components/Prizes'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import Sponsors from '../components/Sponsors';
import AboutUS from '../components/AboutUS'
import Timeline from '../components/Timeline'
import FAQs from '../components/Faq/Faq'
import AboutDev from '../components/AboutDev'
import Statistics from '../components/Statistics/Statistics'


const Home = () => {
  return (
    <>
    <Nav/>
    <Header/>
    {/* Hide Statistics on small and medium screens */}
    <div className="hidden md:block lg:block">
      <Statistics/>
    </div>
    <AboutUS/>
    <AboutDev/>
    <Tracks/>
    <Judges/>
    <Timeline/>
    <Prizes/>
    <Sponsors/>
    <FAQs/>
    <Footer/>
    </>
  )
}

export default Home
