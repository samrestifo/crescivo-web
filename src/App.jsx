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
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
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
      <Footer />
    </>
  )
}
