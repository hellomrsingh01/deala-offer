import Hero from '../components/Hero.jsx'
import SubBanner from '../components/SubBanner.jsx'
import Categories from '../components/Categories.jsx'
import TopTrendingDeals from '../components/TopTrendingDeals.jsx'
import TrendingGrid from '../components/TrendingGrid.jsx'
import PopularDeals from '../components/PopularDeals.jsx'
import BestCards from '../components/BestCards.jsx'
import Ticker from '../components/Ticker.jsx'
import Testimonials from '../components/Testimonials.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <SubBanner />
      <Categories />
      <TopTrendingDeals />
      <TrendingGrid />
      <PopularDeals />
      <BestCards />
      <Ticker />
      <Testimonials />
    </>
  )
}
