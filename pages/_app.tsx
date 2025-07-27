import type { AppProps } from 'next/app'
import '../pages/index.css'
import ErrorBoundary from './components/ErrorBoundary'
import Header from './components/Header'
import Breadcrumbs from './components/Breadcrumbs'
import Footer from './components/Footer'

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