import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const WeseleyPage = () => (
  <Layout>
    <SEO title="Peter Weseley, MD" keywords={['ophthalmologist', 'eye doctor', 'Peter Weseley', 'Dr Weseley']} />
    <div className="doctor__page">
      <div className="doctor__container">
        <ul className="doctor__breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/doctors">Our Doctors</Link></li>
          <li>Dr. Peter Weseley</li>
        </ul>
        <h1>Dr. Peter Weseley</h1>
        <h3>Ophthalmologist</h3>
        <div className="doctor__info">
          <div className="doctor__img">
            <img src="./images/weseley-peter.jpeg" alt="" />
          </div>
          <div className="doctor__bio">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio nesciunt, nisi aperiam, earum laudantium unde quae quam maiores perferendis accusamus aspernatur eaque inventore labore dicta nobis cumque tempora omnis magnam!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio nesciunt, nisi aperiam, earum laudantium unde quae quam maiores perferendis accusamus aspernatur eaque inventore labore dicta nobis cumque tempora omnis magnam!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio nesciunt, nisi aperiam, earum laudantium unde quae quam maiores perferendis accusamus aspernatur eaque inventore labore dicta nobis cumque tempora omnis magnam!</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default WeseleyPage