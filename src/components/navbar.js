import React, { Component } from 'react'
import { Link } from 'gatsby'

import PhoneImg from '../images/phone-solid.svg'

export default class navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          <div className="header__left">
            <div className='header__logo'>
              <Link to="/">
                <div>New York Retina</div>
                <div>Consultants</div>
              </Link>
            </div>
          </div>
          <div className="header__right">
            <div className="header__info">
              <button className="header__button" onClick={this.props.toggleForm}>
                Request Appointment
              </button>
              <div className="header__contact">
                <div>Manhattan</div> 
                <a href="tel:+12126772000">
                  <img src={PhoneImg} alt="logo of a phone"/>
                  <div>212-677-2000</div>
                </a>
              </div>
              <div className="header__contact">
                <div>Queens</div>
                <a href="tel:+7183805070">
                  <img src={PhoneImg} alt="logo of a phone"/>
                  <div>718-380-5070</div>
                </a>
              </div>
            </div>
            <nav className="header__nav">
              <ul className="nav__list">
                <li className="nav__link"><Link to="/">Home</Link></li>
                <li className="nav__link"><Link to="/about-us">About Us</Link></li>
                <li className="nav__link"><Link to="/doctors">Our Doctors</Link></li>
                <li className="nav__link"><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}
