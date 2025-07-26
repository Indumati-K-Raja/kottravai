import React from 'react';

const Volunteer: React.FC = () => {
  return (
    <main className="volunteer-page" style={{ fontFamily: 'inherit', background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)', minHeight: '100vh', padding: '0 0 2rem 0' }}>
      <section style={{ padding: '3rem 1rem 2rem 1rem', textAlign: 'center', background: 'linear-gradient(90deg, #f1f5f9 60%, #e0e7ef 100%)' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: '#1e293b' }}>Volunteer with Kottravai</h1>
        <p style={{ fontSize: '1.2rem', color: '#334155', maxWidth: 600, margin: '0 auto' }}>
          Make a real difference in the lives of rural women artisans. Join our movement as a volunteer and help us create lasting impact.
        </p>
      </section>

      <section style={{ maxWidth: 900, margin: '2rem auto', padding: '2rem 1rem', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(30,41,59,0.06)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#0f172a', marginBottom: '1rem' }}>Why Volunteer?</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#334155', fontSize: '1.1rem' }}>
          <li style={{ marginBottom: 12 }}><b>Empowerment:</b> Directly support women’s economic and social empowerment.</li>
          <li style={{ marginBottom: 12 }}><b>Skill Building:</b> Gain valuable experience in social impact, community work, and leadership.</li>
          <li style={{ marginBottom: 12 }}><b>Community:</b> Join a passionate, purpose-driven team and network with like-minded changemakers.</li>
          <li style={{ marginBottom: 12 }}><b>Personal Growth:</b> Make a tangible difference and grow as a person.</li>
        </ul>
      </section>

      <section style={{ maxWidth: 900, margin: '2rem auto', padding: '2rem 1rem', background: '#f8fafc', borderRadius: 16, boxShadow: '0 2px 12px rgba(30,41,59,0.04)' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#0f172a', marginBottom: '1rem' }}>How to Volunteer</h2>
        <ol style={{ color: '#334155', fontSize: '1.1rem', paddingLeft: 20 }}>
          <li style={{ marginBottom: 10 }}><b>Express Interest:</b> Fill out the form below or email us at <a href="mailto:volunteer@kottravai.com" style={{ color: '#2563eb' }}>volunteer@kottravai.com</a>.</li>
          <li style={{ marginBottom: 10 }}><b>Connect:</b> We’ll reach out to discuss your interests, skills, and availability.</li>
          <li style={{ marginBottom: 10 }}><b>Get Matched:</b> Join a project or initiative that fits your passion and skills.</li>
          <li><b>Make Impact:</b> Start volunteering and help us empower more women!</li>
        </ol>
      </section>

      <section style={{ maxWidth: 900, margin: '2rem auto', padding: '2rem 1rem', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(30,41,59,0.06)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#0f172a', marginBottom: '1rem' }}>Ready to Volunteer?</h2>
        <a href="mailto:volunteer@kottravai.com" style={{ display: 'inline-block', background: 'linear-gradient(90deg, #2563eb 60%, #38bdf8 100%)', color: '#fff', fontWeight: 600, fontSize: '1.1rem', padding: '0.9rem 2.2rem', borderRadius: 8, textDecoration: 'none', boxShadow: '0 2px 8px rgba(37,99,235,0.08)' }}>
          Contact Us
        </a>
        <p style={{ marginTop: 18, color: '#64748b', fontSize: '1rem' }}>
          We welcome volunteers from all backgrounds—students, professionals, retirees, and anyone passionate about change.
        </p>
      </section>
    </main>
  );
};

export default Volunteer;
