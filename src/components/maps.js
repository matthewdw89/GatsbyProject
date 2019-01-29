import React, { Component } from 'react'

export default class maps extends Component {
  render() {
    return (
      <section>
        <div className="locations">
          <div className="location__map">
            {/* <img src="../images/manhattan2.png" alt="" /> */}
            <iframe className="location__map--manhattan" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3683072760614!2d-73.98677508471924!3d40.73192057932973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599e3f466b15%3A0xc69630ada5b5e931!2sNew+York+Retina+Consultants!5e0!3m2!1sen!2sca!4v1547440510142" allowFullScreen></iframe>
          </div>
          <div className="location__box">
            <h4>Manhattan</h4>
            <a href="https://goo.gl/maps/uwu8Uegg1xM2" target="_blank" rel="noopener noreferrer">310 E. 14th Street, Suite 419, New York, NY 10003</a>
            <a href="tel:+12126772000">
              <div>Phone: 212-677-2000</div>
            </a>
            <div>Fax: 212-677-2000</div>
            <p>Office hours Monday through Friday. Early and Late appointment upon request. Available evenings and weekends for emergencies.</p>
          </div>
        </div>
        <div className="locations">
          <div className="location__map">
            {/* <img src="../images/queens.png" alt="" /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8751991187382!2d-73.80817308459476!3d40.720763779331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260faa4e8e70f%3A0xe883a9394c4594f4!2s161-10+Union+Tpke%2C+Flushing%2C+NY+11366%2C+USA!5e0!3m2!1sen!2sca!4v1547487382644" allowFullScreen></iframe>
          </div>
          <div className="location__box">
            <h4>Queens</h4>
            <a href="https://goo.gl/maps/uwu8Uegg1xM2" target="_blank" rel="noopener noreferrer">161-10 Union Turnpike, Flushing, New York, NY 11366</a>
            <a href="tel:+12126772000">
              <div>Phone: 718-380-5070</div>
            </a>
            <p>Office hours Monday through Friday. Early and Late appointment upon request. Available evenings and weekends for emergencies.</p>
          </div>
        </div>
      </section>
    )
  }
}
