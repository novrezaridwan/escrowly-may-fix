import React from "react";
import "./SupportHours.scss";
import Button from "../../components/Button/Button";

const SupportHours = () => {

  return (
    <section className="section section-support-hours">
        <div className="container">
            <div className="row xs-direction-column">
                <div className="col col-hours">
                    <h3>Support Hours</h3>
                    <ul className="support-hours-list">
                        <li><img src="/img/icon-time-white.svg" alt="Escrowly Support Hours" />Monday-Friday, 8am to 11pm, Pacific.</li>
                        <li><img src="/img/icon-phone-white.svg" alt="Escrowly Helpline" />+1 (302) 444-8419<span></span>USA and Canada (Direct Line)</li>
                        <li><img src="/img/icon-phone-white.svg" alt="Escrowly Helpline" />+1 (302) 444-8419<span></span>Australia (International)</li>
                        <li><img src="/img/icon-phone-white.svg" alt="Escrowly Helpline" />+1 (302) 444-8419<span></span>Other countries</li>
                    </ul>
                    <Button text="Get Help" icon="/img/btn-arrow-right-dark.svg" className="btn btn-secondary"/>
                </div>
                <div className="col col-support-hours-image">
                    <img className="support-hours-image" src="/images/support-hours.jpg" alt="Escrowly Support Hours" />
                </div>
            </div>
        </div>
    </section> 
  );
};

export default SupportHours;
