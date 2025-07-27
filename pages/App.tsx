import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';
import Home from './Home';
import Shop from './Shop';
import OurStory from './OurStory';
import Contact from './Contact';
import About from './About';
import Products from './Products';

import Timeline from './components/Timeline';
import JoinUs from './JoinUs';
import Volunteer from './Volunteer';
import Donate from './Donate';
import Partner from './Partner';
import Media from './Media';
import Events from './Events';
import News from './News';
import Support from './Support';
import Terms from './Terms';
import Privacy from './Privacy';
import Careers from './Careers';
import Blog from './Blog';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import Faq from './Faq';
import Sitemap from './Sitemap';

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