<<<<<<< HEAD
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
||||||| merged common ancestors
=======
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['Ophthalmology', 'eye doctor', 'glaucoma', 'vitreoretinal surgery']} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/contact/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
>>>>>>> a181bcad6115774aebca10ede6ebc07579bcefeb
