import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <nav className="header" role="banner">
    <div className="header__logo">
      <Link to="/">
        <h1>
          {siteTitle}
        </h1>
      </Link>
    </div>
    <div>
      
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
