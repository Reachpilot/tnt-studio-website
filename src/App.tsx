import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import RouteTracker from './components/RouteTracker'
import Hero from './components/Hero'
import LogoCarousel from './components/LogoCarousel'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import VideoSection from './components/VideoSection'
import Founders from './components/Founders'
import Recruiting from './components/Recruiting'
import Contact from './components/Contact'
import FAQSection from './components/FAQSection'
import AEOSection from './components/AEOSection'
import ProcessSection from './components/ProcessSection'
import Kurzantwort from './components/Kurzantwort'
import TechnikSection from './components/TechnikSection'
import PricingSection from './components/PricingSection'
import LocalSEO from './components/LocalSEO'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import ServiceDetail from './pages/ServiceDetail'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import LocationList from './pages/LocationList'
import LocationDetail from './pages/LocationDetail'
import IndustryList from './pages/IndustryList'
import IndustryDetail from './pages/IndustryDetail'
import NotFound from './pages/NotFound'


const homeMeta = {
  title: 'TnT Studio, Design- & Marketing-Studio | Google + ChatGPT',
  description: 'TnT Studio macht Unternehmen gefunden, bei Google UND ChatGPT. Web Design, KI-Sichtbarkeit & SEO, Social Media Marketing & Software Development aus einer Hand. Gegründet von Tiago & Theo, umgesetzt von Designern, Entwicklern und Marketern. Jetzt kostenlos prüfen lassen.',
}

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
      <Hero />
      <LogoCarousel />
      <AEOSection />
      <Services />
      <PricingSection />
      <ProcessSection />
      <Portfolio />
      <VideoSection />
      <Founders />
      <Recruiting />
      <TechnikSection />
      <Kurzantwort />
      <FAQSection />
      <LocalSEO />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteTracker />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen/:slug" element={<ServiceDetail />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/standorte" element={<LocationList />} />
          <Route path="/standorte/:slug" element={<LocationDetail />} />
          <Route path="/branchen" element={<IndustryList />} />
          <Route path="/branchen/:slug" element={<IndustryDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </BrowserRouter>
  )
}
