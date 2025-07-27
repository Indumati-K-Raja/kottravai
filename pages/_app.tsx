import type { AppProps } from 'next/app'
import React from 'react'
import ErrorBoundary from '../components/ErrorBoundary'
import Header from '../components/Header'
import Breadcrumbs from '../components/Breadcrumbs'
import Footer from '../components/Footer'
import '../styles.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Header />
        <Breadcrumbs />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ErrorBoundary>
  )
}