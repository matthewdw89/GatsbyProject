import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class headerDoctors extends Component {
  render() {
    return (
      <div className={`hero__doctor`}>
        <Link to={`${this.props.link}`}>
          <div className={`${this.props.image} doctor__image`}>
            <img src="" alt=""/>
          </div>
        </Link>
        <div className="doctor__info">
          <p>{this.props.name}, MD</p>
          <Link to={`${this.props.link}`}>FULL BIO</Link>
        </div>
      </div>
    )
  }
}
