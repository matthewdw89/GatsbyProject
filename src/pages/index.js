import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Maps from '../components/maps'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['ophthalmologist', 'eye doctor']} />
    <Hero />
    <Maps />
    <section>
      <div className="cta-img">
        <div className="cta">
          <h3>Helping people is what we do</h3>
          <div>Come see an Award winning Ophthalmologists in your area</div>
          <button className="cta__button">
            Request appointment
          </button>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
