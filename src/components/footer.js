import React, { Component } from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"

class Footer extends Component {
  render() {
    const { doctors } = this.props.data.site.siteMetadata
    return (
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__doctors">
            <p className="footer__header">Doctors</p>
            {
              doctors.map(each => {
                return(
                  <Link to={each.link} key={each.name}>
                    <p className="footer__doctor">{each.name}, MD</p>
                  </Link>
                )
              })
            }
          </div>
          <div className="footer__locations">
            <p className="footer__header">Our Locations</p>
            <div>
              <p className="location__name">Manhattan</p>
              <p><a href="https://goo.gl/maps/uwu8Uegg1xM2" target="_blank" rel="noopener noreferrer">310 E. 14th Street, Suite 419, New York, NY 10003</a></p>
              <p>Phone: <a href="tel:+12126772000">(212) 677-2000</a> Fax: (212) 353-5923</p>
            </div>
            <div>
              <p className="location__name">Queens</p>
              <p><a href="https://goo.gl/maps/MLKDiZ3enXR2" target="_blank" rel="noopener noreferrer">161-10 Union Turnpike, Flushing, New York 11366</a></p>
              <p>Phone: <a href="tel:+7183805070">(718) 380-5070</a></p>
            </div>
          </div>
        </div>
        <div className="footer__bar">
          <div className="footer__container">
            <div className="footer__logo">
              LOGO HERE
            </div>
            <nav>
              <ul className="footer__nav">
                <li className="nav__link"><Link to="/">Home</Link></li>
                <li className="nav__link">About Us</li>
                <li className="nav__link">Our Doctors</li>
                <li className="nav__link">Contact</li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
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
    render={data => <Footer data={data} />}
  />
);