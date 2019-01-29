import React, { Component } from 'react'

import CloseImg from '../images/close.svg'

export default class ContactForm extends Component {
  
  render() {
    return (
      <div className="contant__overlay" onClick={this.props.toggleForm} style={{display: this.props.display}} >
        <div className="contact__container" onClick={e => e.stopPropagation()}>
          <img src={CloseImg} alt="cross to indicate closing" onClick={this.props.toggleForm} />
          <h2>Appointment Request Form</h2>
          <p>Please fill out this short form to request your consultation.</p>
          <form className="contact__form" onSubmit={this.props.submitForm}>
            <div className="form__required">Fields marked * are required</div>
            <input type="text" name="firstName" placeholder="First Name*"></input>
            <input type="text" name="lastName" placeholder="Last Name*"></input>
            <input type="email" name="email" placeholder="Email*"></input>
            <input type="tel" name="phone" placeholder="Phone"></input>
            <textarea name="comments" placeholder="How can we help?"></textarea>
            <input type="submit"></input>
          </form>
          <p>For an urgent appointment please call 212-203-0999.</p>
        </div>
      </div>
    )
  }
}
