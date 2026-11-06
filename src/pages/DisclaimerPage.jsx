import LegalPage from '../components/LegalPage.jsx'
import { affiliateDisclosure } from '../content/legal.js'

export default function DisclaimerPage() {
  return (
    <LegalPage
      doc={affiliateDisclosure}
      breadcrumb={[{ label: 'Deala', to: '/' }, { label: 'Affiliate Disclosure' }]}
    />
  )
}
