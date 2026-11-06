// Policy content for the legal pages. Written as structured data so the
// LegalPage component can render it consistently.
//
// IMPORTANT: These policies are professional templates provided for
// convenience. Have them reviewed by qualified legal counsel and tailored
// to your jurisdiction and actual data practices before publishing.

import { siteInfo } from './site.js'

const { name, email, address, effectiveDate } = siteInfo

export const privacyPolicy = {
  title: 'Privacy Policy',
  updated: effectiveDate,
  intro: `This Privacy Policy explains how ${name} ("we", "us", or "our") collects, uses, discloses, and safeguards your information when you visit our website. We are committed to protecting your privacy and handling your data transparently.`,
  sections: [
    {
      heading: '1. Information We Collect',
      body: [
        'We collect information in the following ways:',
        {
          list: [
            'Information you provide: your name and email address when you subscribe to our newsletter, submit a coupon, or contact us through our forms.',
            'Information collected automatically: your IP address, browser type, device information, pages visited, referring URLs, and interaction data, gathered through cookies and similar technologies.',
          ],
        },
      ],
    },
    {
      heading: '2. How We Use Your Information',
      body: [
        'We use the information we collect to:',
        {
          list: [
            'Operate, maintain, and improve our website and services.',
            'Send you newsletters, deal alerts, and updates you have requested.',
            'Respond to your enquiries and provide customer support.',
            'Measure and analyse traffic, usage, and advertising performance.',
            'Detect, prevent, and address technical issues, fraud, or abuse.',
          ],
        },
      ],
    },
    {
      heading: '3. Cookies and Tracking Technologies',
      body: [
        'We use cookies and similar technologies to operate the site, remember your preferences, analyse performance, and deliver relevant advertising. You can control cookies through your browser settings and our cookie banner. For details, please see our Cookie Policy.',
      ],
    },
    {
      heading: '4. Advertising and Analytics',
      body: [
        'We use third-party services such as Google Analytics and Google Ads to understand how visitors use our site and to show relevant ads. These providers may use cookies and device identifiers to collect information about your activity over time and across websites.',
        'You can opt out of personalised Google advertising through Google Ads Settings, and you can learn about your choices for interest-based advertising at optout.aboutads.info and youronlinechoices.eu.',
      ],
    },
    {
      heading: '5. How We Share Information',
      body: [
        'We do not sell your personal information. We may share it with:',
        {
          list: [
            'Service providers who help us operate the site (hosting, email delivery, analytics), under appropriate confidentiality obligations.',
            'Advertising and measurement partners, as described above.',
            'Authorities or third parties when required by law, or to protect our rights, users, and the public.',
          ],
        },
      ],
    },
    {
      heading: '6. Your Rights and Choices',
      body: [
        'Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal information, to object to certain processing, and to withdraw consent. You can unsubscribe from marketing emails at any time using the link in each message.',
        `To exercise any of these rights, contact us at ${email}.`,
      ],
    },
    {
      heading: '7. Data Retention and Security',
      body: [
        'We retain personal information only for as long as necessary to fulfil the purposes described in this policy or as required by law. We use reasonable administrative, technical, and physical safeguards to protect your information, though no method of transmission over the internet is completely secure.',
      ],
    },
    {
      heading: "8. Children's Privacy",
      body: [
        'Our website is not directed to children under 13 (or the minimum age required in your jurisdiction), and we do not knowingly collect personal information from them. If you believe a child has provided us information, please contact us so we can remove it.',
      ],
    },
    {
      heading: '9. Changes to This Policy',
      body: [
        'We may update this Privacy Policy from time to time. We will post the revised version on this page and update the "Last updated" date above. Your continued use of the site after changes take effect constitutes acceptance of the updated policy.',
      ],
    },
    {
      heading: '10. Contact Us',
      body: [
        `If you have questions about this Privacy Policy or our data practices, contact us at ${email} or by mail at ${address}.`,
      ],
    },
  ],
}

export const termsOfService = {
  title: 'Terms & Conditions',
  updated: effectiveDate,
  intro: `These Terms & Conditions ("Terms") govern your access to and use of the ${name} website. By using our site, you agree to these Terms. If you do not agree, please do not use the site.`,
  sections: [
    {
      heading: '1. Use of the Service',
      body: [
        `${name} provides a platform that aggregates coupons, promotional codes, cashback offers, and deals from third-party retailers. You may use the site for your personal, non-commercial purposes in accordance with these Terms and applicable law.`,
      ],
    },
    {
      heading: '2. Coupons, Deals, and Third-Party Offers',
      body: [
        'All coupons, prices, discounts, and offers displayed on our site are provided for informational purposes and are owned and controlled by the respective third-party retailers. We do not guarantee that any coupon, code, price, or offer is accurate, current, valid, or available.',
        'Offers are subject to change, expiry, or withdrawal by the retailer at any time without notice. Your transactions are solely between you and the retailer, and we are not a party to them.',
      ],
    },
    {
      heading: '3. Submissions and Accounts',
      body: [
        'If you submit a coupon, comment, or other content, you confirm that it is accurate and that you have the right to share it. You grant us a non-exclusive, royalty-free licence to display and distribute such content. You are responsible for maintaining the confidentiality of any account credentials.',
      ],
    },
    {
      heading: '4. Intellectual Property',
      body: [
        `The site design, text, graphics, logos, and other original content are the property of ${name} or its licensors and are protected by intellectual property laws. Brand names and logos of retailers are the property of their respective owners and are used for identification purposes only.`,
      ],
    },
    {
      heading: '5. Prohibited Conduct',
      body: [
        'You agree not to:',
        {
          list: [
            'Use the site for any unlawful, fraudulent, or harmful purpose.',
            'Attempt to interfere with, disrupt, or gain unauthorised access to the site or its systems.',
            'Scrape, copy, or redistribute content except as permitted by these Terms.',
            'Post content that is misleading, infringing, or otherwise objectionable.',
          ],
        },
      ],
    },
    {
      heading: '6. Disclaimers',
      body: [
        'The site and all content are provided "as is" and "as available" without warranties of any kind, whether express or implied, including accuracy, reliability, or fitness for a particular purpose. We do not warrant that the site will be uninterrupted or error-free.',
      ],
    },
    {
      heading: '7. Limitation of Liability',
      body: [
        `To the fullest extent permitted by law, ${name} will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss arising from your use of the site, any third-party offers, or any transaction with a retailer.`,
      ],
    },
    {
      heading: '8. Third-Party Links',
      body: [
        'Our site contains links to third-party websites. We are not responsible for the content, policies, or practices of those websites and encourage you to review their terms and privacy policies.',
      ],
    },
    {
      heading: '9. Changes to These Terms',
      body: [
        'We may modify these Terms at any time by posting the updated version on this page. Your continued use of the site after changes take effect constitutes acceptance of the revised Terms.',
      ],
    },
    {
      heading: '10. Contact',
      body: [
        `Questions about these Terms can be sent to ${email}.`,
      ],
    },
  ],
}

export const cookiePolicy = {
  title: 'Cookie Policy',
  updated: effectiveDate,
  intro: `This Cookie Policy explains what cookies are, how ${name} uses them, and the choices you have. It should be read together with our Privacy Policy.`,
  sections: [
    {
      heading: '1. What Are Cookies',
      body: [
        'Cookies are small text files placed on your device when you visit a website. They help the site function, remember your preferences, and provide information to the site owners and advertisers.',
      ],
    },
    {
      heading: '2. How We Use Cookies',
      body: [
        'We use cookies for the following purposes:',
        {
          list: [
            'Essential cookies: required for the site to function and cannot be switched off in our systems.',
            'Performance and analytics cookies: help us understand how visitors interact with the site so we can improve it.',
            'Functional cookies: remember your preferences, such as dismissed banners.',
            'Advertising cookies: used to deliver relevant ads and measure their effectiveness, including through Google Ads.',
          ],
        },
      ],
    },
    {
      heading: '3. Third-Party Cookies',
      body: [
        'Some cookies are set by third parties, such as Google Analytics and Google Ads. These providers have their own privacy and cookie policies, which govern their use of your information.',
      ],
    },
    {
      heading: '4. Managing Your Preferences',
      body: [
        'You can accept or decline non-essential cookies through our cookie banner. You can also control cookies through your browser settings, including deleting existing cookies and blocking future ones. Disabling some cookies may affect how the site works.',
      ],
    },
    {
      heading: '5. Changes and Contact',
      body: [
        `We may update this Cookie Policy from time to time. For questions, contact us at ${email}.`,
      ],
    },
  ],
}

export const affiliateDisclosure = {
  title: 'Affiliate Disclosure',
  updated: effectiveDate,
  intro: `We believe in full transparency with our visitors. This page explains how ${name} earns revenue and how that relationship affects the content on our site.`,
  sections: [
    {
      heading: 'How We Earn',
      body: [
        `${name} is a free service supported by advertising and affiliate partnerships. When you click certain links or use certain coupons on our site and then make a purchase, we may earn a commission from the retailer at no additional cost to you.`,
      ],
    },
    {
      heading: 'Editorial Independence',
      body: [
        'Affiliate relationships never dictate our editorial coverage. We aim to surface genuinely useful deals and present offers accurately. A commission relationship does not guarantee placement, and we clearly label sponsored or exclusive content where applicable.',
      ],
    },
    {
      heading: 'Accuracy of Offers',
      body: [
        'Prices, discounts, and availability are set by the retailers and can change at any time. We make reasonable efforts to keep listings current but cannot guarantee that every offer is accurate or still valid at the time you view it. Always confirm the final price and terms on the retailer’s website before purchasing.',
      ],
    },
    {
      heading: 'Questions',
      body: [
        `If you have any questions about our advertising or affiliate practices, please reach out at ${email}.`,
      ],
    },
  ],
}
