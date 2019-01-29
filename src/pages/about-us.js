import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="Contact" keywords={['ophthalmologist', 'eye doctor', 'eye doctor near me', 'eye doctor nyc']} />
    <div className="doctor__page">
      <div className="doctor__container">
        <ul className="doctor__breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>About Us</li>
        </ul>
        <h1>About Us</h1>
      </div>
    </div>
  </Layout>
)

export default AboutPage