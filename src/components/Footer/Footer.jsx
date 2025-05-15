import React, { useState } from "react";
import "./Footer.scss";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import DropdownCustom from "../DropdownCustom/DropdownCustom";
import Textarea from "../Textarea/Textarea";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dataTitle = [
    {
      id: 1,
      label: "Mr",
    },
    {
      id: 2,
      label: "Ms",
    },
  ];

  const dataTypeIssue = [
    {
      id: 1,
      label: "General Functionalities",
    },
  ];

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="custom-class"
      >
        <h3>Report a Bug</h3>
        <p className="text-left">
          Please provide as much detail as you can to help us fix the issue
          quickly.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-1 flex-col gap-2">
            <label className="font-medium text-sm text-primary">
              Please Select The Type of Issue
            </label>
            <DropdownCustom users={dataTypeIssue} placeholder="Select Title" />
          </div>
          <div className="flex flex-row gap-4 flex-wrap">
            <div className="flex flex-1 flex-col gap-2">
              <label className="font-medium text-sm text-primary">Title</label>
              <DropdownCustom users={dataTitle} placeholder="Select Title" />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label className="font-medium text-sm text-primary">
                First Name
              </label>
              <Input type="text" placeholder="First Name" />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label className="font-medium text-sm text-primary">
                Surname
              </label>
              <Input type="text" placeholder="Surname" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm text-primary">
              Email Address
            </label>
            <Input type="email" placeholder="example@domain.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm text-primary">
              Phone Number
            </label>
            <Input type="number" placeholder="+1 (302) 444-8419" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm text-primary">
              Your Inquiry
            </label>
            <Textarea type="text" placeholder="Your Message" />
          </div>
          <button className="btn-submit">Submit</button>
        </div>
      </Modal>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col footer-col-1">
              <div className="footer-contact">
                <a href="#index" className="logo">
                  <img src="/img/logo.svg" alt="Escrowly Logo" />
                </a>
                <p>The Global Leader In Online Crypto Escrow.</p>
                <a href="tel:+13024448419" className="phone">
                  <img src="/img/icon-phone.svg" alt="Escrowly Phone Icon" />
                  +1 (302) 444-8419
                </a>
                <LanguageDropdown />
              </div>
            </div>
            <div className="col footer-col-2">
              <ul className="footer-menu">
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/fee-calculator">Fee Calculator</Link>
                </li>
                <li>
                  <Link to="/how-it-works">How it Works</Link>
                </li>
                <li>
                  <Link to="/api-documentation">API Documentation</Link>
                </li>
              </ul>
            </div>
            <div className="col footer-col-3">
              <ul className="footer-menu">
                <li>
                  <a href="#">Escrowly Services</a>
                  <ul>
                    <li>
                      <Link to="/crypto-escrow-services">
                        Crypto Escrow Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/domain-name-escrow">Domain Name Escrow</Link>
                    </li>
                    <li>
                      <Link to="/motor-vehicle-escrow">Motor Vehicle Escrow</Link>
                    </li>
                    <li>
                      <Link to="/milestone-transactions-escrow">Milestone Transactions</Link>
                    </li>
                    <li>
                      <Link to="/online-goods-digital-items-escrow">
                        Online Goods & Digital Items
                      </Link>
                    </li>
                    <li>
                      <Link to="/stock-investment-escrow">Stock & Investment Escrow</Link>
                    </li>
                    <li>
                      <Link to="/luxury-items-escrow">Luxury Items Escrow</Link>
                    </li>
                    <li>
                      <Link to="/real-estate-escrow">Real Estate Escrow</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col footer-col-4">
              <ul className="footer-menu">
                <li>
                  <a href="#">Support</a>
                  <ul>
                    <li>
                      <Link to="/payment-options">Payment Options</Link>
                    </li>
                    <li>
                      <Link to="/approved-carriers">Approved Carriers</Link>
                    </li>
                    <li>
                      <Link to="/fraud-prevention">Fraud Prevention</Link>
                    </li>
                    <li>
                      <Link onClick={() => setIsModalOpen(true)}>
                        Report a Bug
                      </Link>
                    </li>
                    <li>
                      <Link to="/help-desk">Contact Us</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col footer-col-5">
              <ul className="footer-menu">
                <li>
                  <a href="#">Partners</a>
                  <ul>
                    <li>
                      <Link to="/get-started">Get Started</Link>
                    </li>
                    <li>
                      <Link to="/our-partners">Our Partners</Link>
                    </li>
                    <li>
                      <Link to="/partners-inquiry">Partners Inquiry</Link>
                    </li>
                    <li>
                      <Link to="/api-guide">API Guide</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col footer-col-6">
              <ul className="footer-menu">
                <li>
                  <a href="#">Policies</a>
                  <ul>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/aml-kyc-policy">AML & KYC Policy</Link>
                    </li>
                    <li>
                      <Link to="/regulatory-compliance">
                        Regulatory Compliance
                      </Link>
                    </li>
                    <li>
                      <Link to="/legal-security-policy">
                        Legal Security Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/risk-disclosure">Risk Disclosure</Link>
                    </li>
                    <li>
                      <Link to="/terms-and-conditions">Terms & Conditions</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col footer-col-7">
              <div className="row">
                <div className="col col-1">
                  <div className="footer-social">
                    <p>Follow us on</p>
                    <ul className="footer-social-icons">
                      <li>
                        <a
                          href="https://www.instagram.com/escrowlyholdings/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/img/social-icon-instagram.svg"
                            alt="Escrowly Instagram"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/img/social-icon-facebook.svg"
                            alt="Escrowly Facebook"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/@Escrowly"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/img/social-icon-youtube.svg"
                            alt="Escrowly Youtube"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://x.com/escrowly"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/img/social-icon-twitter.svg"
                            alt="Escrowly Twitter"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/escrowly/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/img/social-icon-linkedin.svg"
                            alt="Escrowly Linkedin"
                          />
                        </a>
                      </li>
                    </ul>
                    <a href="#url" className="btn-google-play">
                      <img
                        width="120"
                        height="151"
                        src="/images/btn-google-play.png"
                        alt="Google Play"
                      />
                    </a>
                    <a href="#url" className="btn-app-store">
                      <img
                        width="120"
                        height="151"
                        src="/images/btn-app-store.png"
                        alt="App Store"
                      />
                    </a>
                  </div>
                </div>
                <div className="col col-2">
                  <div className="trustpilot">
                    <p>Excellent</p>
                    <div className="rating">
                      <img src="/img/stars.svg" alt="Rating Stars" />
                      <span>4.9</span>
                    </div>
                    <div className="trustpilot-info">
                      <img
                        src="/img/trustpilot-logo.svg"
                        alt="Trustpilot Logo"
                      />
                      <p>
                        Based on <a href="https://www.trustpilot.com/review/escrowly.com" target="_blank">588 reviews</a>
                      </p>
                    </div>
                  </div>
                  <img
                    src="/img/norton2.png"
                    width="106"
                    height="60"
                    alt="Norton Security"
                    className="norton"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy">
          <div className="container">
            <div className="row">
              <div className="col">
                <p>
                  Escrowly.com operates in compliance with applicable
                  regulations to provide a secure crypto escrow service.
                  <br />
                  Escrowly LLC is a registered Money Services Business (MSB)
                  with FinCEN and complies with all AML/KYC regulations.
                  <br />
                  We are not a bank or a legal advisory firm. Learn more  
                  <a
                    href="https://www.fincen.gov/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-blue-600 hover:underline"
                  >
                     FinCEN.gov{" "}
                    <img
                      className="icon-globe"
                      src="/img/globe-1.svg"
                      alt="Globe Icon"
                    />
                  </a>
                </p>
              </div>
              <div className="col">
                <p className="copyright">
                  Copyright © Escrowly™ and logo are trademarks of Escrowly LLC
                  All rights reserved.
                  <br />
                  <span>
                    Regulated. Secure. Pioneering the Future of Secure Crypto
                    Escrow
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
