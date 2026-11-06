import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import CouponsPage from './pages/CouponsPage.jsx'
import SingleCouponPage from './pages/SingleCouponPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/coupons" element={<CouponsPage />} />
          <Route path="/coupon/:slug" element={<SingleCouponPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
