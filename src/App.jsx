import { lazy, Suspense } from 'react'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import { useReveal } from './hooks/useReveal'

// Below-fold components lazy loaded — only downloaded when needed
const Problem    = lazy(() => import('./components/Problem/Problem'))
const ImageSplit = lazy(() => import('./components/Services/ImageSplit'))
const Services   = lazy(() => import('./components/Services/Services'))
const FullImage  = lazy(() => import('./components/Services/FullImage'))
const Diagnostic = lazy(() => import('./components/Diagnostic/Diagnostic'))
const Cadenza    = lazy(() => import('./components/Cadenza/Cadenza'))
const Results    = lazy(() => import('./components/Results/Results'))
const MetricsBand = lazy(() => import('./components/Results/MetricsBand'))
const About      = lazy(() => import('./components/About/About'))
const Contact    = lazy(() => import('./components/Contact/Contact'))
const Footer     = lazy(() => import('./components/Footer/Footer'))

export default function App() {
  // Wire up scroll reveal for all .reveal elements
  useReveal()

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Suspense fallback={null}>
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
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}
