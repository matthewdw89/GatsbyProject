import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Menu = () => (
    <nav className="menu">
        <ul className="menu__list">
            <li className="menu__home">
                <Link to="/">
                    <h3>Home</h3>
                </Link>
            </li>
            <li className="menu__doctors">
                <Link to="/">
                    <h3>Our Eye Doctors</h3>
                </Link>
            </li>
            <li className="menu__contact">
                <Link to="/contact">
                    <h3>Contact</h3>
                </Link>
            </li>
        </ul>
    </nav>
)

Menu.propTypes = {
    siteTitle: PropTypes.string,
}

Menu.defaultProps = {
    siteTitle: '',
}

export default Menu
