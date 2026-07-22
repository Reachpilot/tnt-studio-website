import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Hero from './components/Hero'
import LogoCarousel from './components/LogoCarousel'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import VideoSection from './components/VideoSection'
import Founders from './components/Founders'
import Recruiting from './components/Recruiting'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import ServiceDetail from './pages/ServiceDetail'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'

const homeMeta = {
  title: 'TnT Studio — Medienagentur Wuppertal | Web Design & Social Media',
  description: 'TnT Studio — Medienagentur in Wuppertal. Web Design, Social Media Marketing, Content Creation, Branding & Produktfotografie. Custom Websites mit React, SEO-optimiert. Jetzt kostenlos beraten lassen.',
}

const organizationSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TnT Studio',
  url: 'https://tnt-studio.de/',
  logo: 'https://tnt-studio.de/og-image.webp',
  description: 'Medienagentur in Wuppertal für Web Design, Social Media Marketing, Content Creation, Branding und Produktfotografie.',
  founders: [
    { '@type': 'Person', name: 'Tiago Esteves', jobTitle: 'Founder & CEO' },
    { '@type': 'Person', name: 'Theo Spingys', jobTitle: 'Co-Founder & Marketing Lead' },
  ],
  sameAs: [
    'https://www.instagram.com/tnt_studio.de/',
    'https://www.linkedin.com/in/tiagoesteves3/',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@tnt-studio.de',
    contactType: 'customer service',
    availableLanguage: ['German', 'English'],
  },
})

const localBusinessSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TnT Studio',
  image: 'https://tnt-studio.de/og-image.webp',
  url: 'https://tnt-studio.de/',
  telephone: '+49',
  email: 'info@tnt-studio.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Julius-Lucas-Weg 90',
    addressLocality: 'Wuppertal',
    postalCode: '42113',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '51.2562',
    longitude: '7.1508',
  },
  areaServed: { '@type': 'City', name: 'Wuppertal' },
  priceRange: '€€',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
})

function Home() {
  return (
    <>
      <Helmet>
        <title>{homeMeta.title}</title>
        <meta name="description" content={homeMeta.description} />
        <link rel="canonical" href="https://tnt-studio.de/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tnt-studio.de/" />
        <meta property="og:title" content={homeMeta.title} />
        <meta property="og:description" content={homeMeta.description} />
        <meta property="og:image" content="https://tnt-studio.de/og-image.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={homeMeta.title} />
        <meta name="twitter:description" content={homeMeta.description} />
        <meta name="twitter:image" content="https://tnt-studio.de/og-image.webp" />
      </Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: organizationSchema }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: localBusinessSchema }}
      />
      <Hero />
      <LogoCarousel />
      <Services />
      <Portfolio />
      <VideoSection />
      <Founders />
      <Recruiting />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen/:slug" element={<ServiceDetail />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </BrowserRouter>
  )
}
