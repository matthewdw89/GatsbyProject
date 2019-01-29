import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const DayanPage = () => (
  <Layout>
    <SEO title="Alan Dayan, MD" keywords={['ophthalmologist', 'eye doctor', 'dr dayan', 'alan dayan']} />
    <div className="doctor__container">
      <ul className="doctor__breadcrumb">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/doctors">Our Doctors</Link></li>
        <li>Dr. Alan Dayan</li>
      </ul>
      <div className="doctor__info">
        <div className="doctor__hero">
          <div className="doctor__img">
            <img src="./images/dayan-alan.jpg" alt="A picture of Dr. Dayan" />
          </div>
          <div className="doctor__name">
            <h1>Dr. Alan Dayan</h1>
            <h3>Ophthalmologist</h3>
          </div>
        </div>
        <div className="doctor__bio">
          <p>Dr. Alan R. Dayan is an experienced ophthalmologist who has helped thousands of patients achieve successful outcomes managing diseases and conditions of the retina. Dr. Dayan has been recognized for excellence in medicine in the pages of New York Magazine's Best Doctors, Castle Connolly's Top Doctors, and in the New York Times’ Superdocs.</p>
          <p>After graduating from the University of Pennsylvania with a Bachelor of Science in Engineering, Dr. Dayan earned his Doctor of Medicine degree at the Mount Sinai School of Medicine where he was elected to the Alpha Omega Alpha Honor Society. He completed his Ophthalmology residency at the New York Eye and Ear Infirmary where he was a chief resident. He trained at the Vitreoretinal Foundation/ University of Tennessee doing a fellowship in Vitreoretinal Disease and Surgery.</p>
          <p>He is board certified by the American Board of Ophthalmology, and a member of the American Academy of Ophthalmology, American Society Of Retina Specialists, and The New York State Ophthalmology Society.</p>
          <p>In addition to maintaining a full practice schedule, he devotes much of his time to teaching. He is a Clinical Assistant Professor of Ophthalmology and teaches residents and fellows at the New York Eye and Ear Infirmary and other programs. Dr. Dayan enjoys the interaction of teaching and guiding young minds in the best ways to practice medicine.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default DayanPage