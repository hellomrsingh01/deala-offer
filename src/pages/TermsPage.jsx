import LegalPage from '../components/LegalPage.jsx'
import { termsOfService } from '../content/legal.js'

export default function TermsPage() {
  return (
    <LegalPage
      doc={termsOfService}
      breadcrumb={[{ label: 'Deala', to: '/' }, { label: 'Terms & Conditions' }]}
    />
  )
}
