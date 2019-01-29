import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Our Doctors" keywords={['ophthalmologist', 'eye doctor', 'New York retina']} />
    <div className="doctor__page">
      <div className="doctor__container">
        <ul className="doctor__breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Our Doctors</li>
        </ul>
        <h1>Our Doctors</h1>
        <div>
          <p>Looking for some experienced and highly trained physicians in either Manhattan or Queens, New York Retina Consultants has been providing quality eye care in your neighborhood for over 20years</p>
        </div>
        <div className="doctor__list">
          <ul>
            <li><Link to="/peter-weseley-md">Dr. Peter Wesely</Link></li>
            <li><Link to="/alan-dayan-md">Dr. Alan Dayan</Link></li>
            <li><Link to="/steven-agemy-md">Dr. Steven Agemy</Link></li>
          </ul>
        </div>
        <div className="doctor__contact">
          <p><span>Request an appointment</span> today using the online form, or by calling one of our offices</p>
          <p>Manhattan: <a href="tel:+12126772000">(212) 677-2000</a></p>
          <p>Queens: <a href="tel:+7183805070">(718) 380-5070</a></p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage