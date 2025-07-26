import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import OurStory from './pages/OurStory';
import Contact from './pages/Contact';
import About from './pages/About';
import Products from './pages/Products';

import Timeline from './components/Timeline';
import JoinUs from "./pages/JoinUs";
import Volunteer from './pages/Volunteer';
import Donate from './pages/Donate';
import Partner from './pages/Partner';
import Media from './pages/Media';
import Events from './pages/Events';
import News from './pages/News';
import Support from './pages/Support';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Faq from './pages/Faq';
import Sitemap from './pages/Sitemap';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <Breadcrumbs />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/join" element={<JoinUs />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/media" element={<Media />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/support" element={<Support />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;