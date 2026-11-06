import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import SubBanner from './components/SubBanner.jsx'
import Categories from './components/Categories.jsx'
import TopTrendingDeals from './components/TopTrendingDeals.jsx'
import TrendingGrid from './components/TrendingGrid.jsx'
import PopularDeals from './components/PopularDeals.jsx'
import BestCards from './components/BestCards.jsx'
import Ticker from './components/Ticker.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SubBanner />
        <Categories />
        <TopTrendingDeals />
        <TrendingGrid />
        <PopularDeals />
        <BestCards />
        <Ticker />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
