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
import FAQSection from './components/FAQSection'
import LocalSEO from './components/LocalSEO'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import ServiceDetail from './pages/ServiceDetail'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'


const homeMeta = {
  title: 'TnT Studio — Medienagentur Wuppertal | Web Design, Social Media & Content',
  description: 'TnT Studio ist die Medienagentur in Wuppertal für Web Design, Social Media Marketing, Content Creation, Branding & Produktfotografie. Zwei Gründer, eine Vision: Marken, die Eindruck hinterlassen. Jetzt kostenlos beraten lassen.',
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
      <Services />
      <Portfolio />
      <VideoSection />
      <Founders />
      <Recruiting />
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
