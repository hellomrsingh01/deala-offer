import LegalPage from '../components/LegalPage.jsx'
import { cookiePolicy } from '../content/legal.js'

export default function CookiePolicyPage() {
  return (
    <LegalPage
      doc={cookiePolicy}
      breadcrumb={[{ label: 'Deala', to: '/' }, { label: 'Cookie Policy' }]}
    />
  )
}
