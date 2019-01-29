import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import HeroDoctors from './heroDoctors'


class Hero extends React.Component {

  render() {
    const { doctors } = this.props.data.site.siteMetadata
    return (
      <section className="hero">
        <div className="hero__container">
          <div className="hero__title">
            <h1>Specialists of Vitreous, Retina and Macula Diseases and Surgeries</h1>
          </div>
          <div className="hero__image">
            <img src="./images/background2.jpg" alt="Image of New York City" />
            {/* <img src="https://c8.alamy.com/comp/MJAJD3/new-york-city-outline-sketch-with-dark-footer-hand-drawn-vector-artwork-MJAJD3.jpg" alt="new york" /> */}
          </div>
          <div className="hero__bio">
            {
              doctors.map(each => {
                return (
                  <HeroDoctors
                    key={each.name}
                    name={each.name}
                    image={each.style}
                    link={each.link}
                  />
                )
              })
            }
          </div>
        </div>
      </section>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            doctors {
              name
              link
              style
            }
          }
        }
      }
    `}
    render={data => <Hero data={data} />}
  />
);

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: '',
}
