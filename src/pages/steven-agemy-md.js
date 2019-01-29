import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AgemyPage = () => (
  <Layout>
    <SEO title="Steve Agemy, MD" keywords={['ophthalmologist', 'eye doctor']} />
    <div className="doctor__container">
      <ul className="doctor__breadcrumb">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/doctors">Our Doctors</Link></li>
        <li>Dr. Steven Agemy</li>
      </ul>
      <div className="doctor__info">
        <div className="doctor__hero">
          <div className="doctor__img">
            <img src="./images/agemy-steven.jpg" alt="A picture of Dr. Dayan" />
          </div>
          <div className="doctor__name">
            <h1>Dr. Steven Agemy</h1>
            <h3>Ophthalmologist</h3>
          </div>
        </div>
        < div className="doctor__bio" >
          <p>Steven Agemy, MD received his medical degree from Wayne State University School of Medicine after graduating from Michigan State University. He completed his Ophthalmology residency at the Kresge Eye Institute/Wayne State University in Detroit, Michigan. As a resident, Dr. Agemy was an Ambassador to the American Academy of Ophthalmology in Washington DC, advocating to congress on behalf of the Michigan Society of Eye Physicians and Surgeons. He was also chosen to be Chief Resident during his residency, an honor bestowed on him by his peers and the department’s chairman. Following residency, Dr. Agemy completed a two-year fellowship in vitreoretinal surgery at the prestigious New York Eye and Ear Infirmary. Prior to joining New York Retina Consultants, PLLC, Dr. Agemy was an assistant professor of clinical ophthalmology at SUNY Downstate College of Medicine.</p>
          <p>Dr. Agemy is a board certified ophthalmologist and specializes in medical and surgical management of vitreoretinal diseases. He is a member of the American Academy of Ophthalmology, American Society of Retina Specialists, and the Association in Research of Vision and Ophthalmology. He has expertise in diagnosing and managing diseases of the retina including age-related macular degeneration (AMD), diabetic retinopathy, and all other retinal vascular diseases. He has a special interest in the surgical management of vitreoretinal diseases including macular holes, epiretinal membranes, and complex retinal detachments.</p>
          <p>Dr. Agemy has authored numerous peer-reviewed articles and has presented his work nationally and internationally. He also serves as a reviewer for scientific ophthalmic journals including Investigative Ophthalmology and Visual Science (IOVS), JAMA Ophthalmology, and Retina. One of his research interests includes retinal imaging. Dr. Agemy was lead author of a paper on imaging diabetic retinopathy using optical coherence tomography angiography, published in one of the most prominent ophthalmic journals.</p>
        </div >
      </div>
    </div>
  </Layout>
)

export default AgemyPage