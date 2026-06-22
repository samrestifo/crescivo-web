import React from 'react'
import { ViteReactSSG } from 'vite-react-ssg/single-page'
import App from './App'
import './styles/global.css'

// Prerenders to static HTML at build time, then hydrates on the client.
export const createRoot = ViteReactSSG(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
