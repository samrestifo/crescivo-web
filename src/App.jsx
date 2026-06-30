import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Problem from './components/Problem/Problem'
import ImageSplit from './components/Services/ImageSplit'
import Services from './components/Services/Services'
import FullImage from './components/Services/FullImage'
import Diagnostic from './components/Diagnostic/Diagnostic'
import Cadenza from './components/Cadenza/Cadenza'
import Results from './components/Results/Results'
import MetricsBand from './components/Results/MetricsBand'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Privacy from './components/Privacy/Privacy'
import { useReveal } from './hooks/useReveal'
import { useEffect, useState } from 'react'

function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <ImageSplit />
      <Services />
      <FullImage />
      <Diagnostic />
      <Cadenza />
      <Results />
      <MetricsBand />
      <About />
      <Contact />
    </main>
  )
}

export default function App() {
  useReveal()

  // Lightweight client-side routing. Starts at '/' so the server-rendered
  // (prerendered) markup matches the first client render — then syncs to the
  // real pathname after mount. The Vercel rewrite (/(.*) → /index.html) serves
  // this app for direct hits to /privacy.
  const [path, setPath] = useState('/')
  useEffect(() => {
    const sync = () => setPath(window.location.pathname)
    sync()
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  const isPrivacy = path.replace(/\/+$/, '') === '/privacy'

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      {isPrivacy ? <Privacy /> : <Home />}
      <Footer />
    </>
  )
}
