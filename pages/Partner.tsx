import React from 'react';

const Partner: React.FC = () => {
  return (
    <main className="partner-page" style={{ fontFamily: 'inherit', background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)', minHeight: '100vh', padding: '0 0 2rem 0' }}>
      <section style={{ padding: '3rem 1rem 2rem 1rem', textAlign: 'center', background: 'linear-gradient(90deg, #f1f5f9 60%, #e0e7ef 100%)' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: '#1e293b' }}>Partner with Kottravai</h1>
        <p style={{ fontSize: '1.2rem', color: '#334155', maxWidth: 600, margin: '0 auto' }}>
          Join us in empowering rural women artisans and making a lasting impact. Let’s build a better, more inclusive world—together.
        </p>
      </section>

      <section style={{ maxWidth: 900, margin: '2rem auto', padding: '2rem 1rem', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(30,41,59,0.06)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#0f172a', marginBottom: '1rem' }}>Why Partner with Us?</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#334155', fontSize: '1.1rem' }}>
          <li style={{ marginBottom: 12 }}><b>Social Impact:</b> Support women’s economic independence and rural communities.</li>
          <li style={{ marginBottom: 12 }}><b>Brand Goodwill:</b> Align your brand with a premium, purpose-driven movement.</li>
          <li style={{ marginBottom: 12 }}><b>Unique Products:</b> Access exclusive, handcrafted goods for gifting, events, or retail.</li>
          <li style={{ marginBottom: 12 }}><b>Storytelling:</b> Share authentic impact stories with your audience.</li>
        </ul>
      </section>

      <section style={{ maxWidth: 900, margin: '2rem auto', padding: '2rem 1rem', background: '#f8fafc', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,41,59,0.04)' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#0f172a', marginBottom: '1rem' }}>How to Partner</h2>
        <ol style={{ color: '#334155', fontSize: '1.1rem', paddingLeft: 20 }}>
          <li style={{ marginBottom: 10 }}><b>Reach Out:</b> Fill out the contact form below or email us at <a href="mailto:partnerships@kottravai.com" style={{ color: '#2563eb' }}>partnerships@kottravai.com</a>.</li>
          <li style={{ marginBottom: 10 }}><b>Discuss:</b> We’ll connect to understand your goals and explore collaboration opportunities.</li>
          <li style={{ marginBottom: 10 }}><b>Co-Create:</b> Develop a partnership plan—be it co-branded products, events, CSR, or retail.</li>
          <li><b>Make Impact:</b> Launch, share, and celebrate the impact together!</li>
        </ol>
      </section>

      <section style={{ maxWidth: 900, margin: '2rem auto', padding: '2rem 1rem', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(30,41,59,0.06)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#0f172a', marginBottom: '1rem' }}>Ready to Partner?</h2>
        <a href="mailto:partnerships@kottravai.com" style={{ display: 'inline-block', background: 'linear-gradient(90deg, #2563eb 60%, #38bdf8 100%)', color: '#fff', fontWeight: 600, fontSize: '1.1rem', padding: '0.9rem 2.2rem', borderRadius: 8, textDecoration: 'none', boxShadow: '0 2px 8px rgba(37,99,235,0.08)' }}>
          Contact Us
        </a>
        <p style={{ marginTop: 18, color: '#64748b', fontSize: '1rem' }}>
          We welcome brands, NGOs, corporates, and individuals who share our vision.
        </p>
      </section>
    </main>
  );
};

export default Partner;
