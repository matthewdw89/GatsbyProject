<<<<<<< HEAD
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={['ophthalmologist', 'eye doctor', 'eye doctor near me', 'eye doctor nyc']} />
    <div className="doctor__page">
      <div className="doctor__container">
        <ul className="doctor__breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Contact</li>
        </ul>
        <h1>Contact</h1>
      </div>
    </div>
  </Layout>
)

export default ContactPage
||||||| merged common ancestors
=======
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const contactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default contactPage
>>>>>>> a181bcad6115774aebca10ede6ebc07579bcefeb
