import LegalPage from '../components/LegalPage.jsx'
import { privacyPolicy } from '../content/legal.js'

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      doc={privacyPolicy}
      breadcrumb={[{ label: 'Deala', to: '/' }, { label: 'Privacy Policy' }]}
    />
  )
}
