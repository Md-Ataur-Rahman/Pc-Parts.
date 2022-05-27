import React from "react";

const Footer = () => {
  return (
    <footer className="footer py-10 px-20 bg-base-200 text-base-content">
      <div>
        <p className="text-4xl">Pc Parts.</p>
        <p>
          Pc Parts. Industries Ltd.
          <br />
          Providing reliable tech since 2005
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <p className="link link-hover">Branding</p>
        <p className="link link-hover">Design</p>
        <p className="link link-hover">Marketing</p>
        <p className="link link-hover">Advertisement</p>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <p className="link link-hover">About us</p>
        <p className="link link-hover">Contact</p>
        <p className="link link-hover">Jobs</p>
        <p className="link link-hover">Press kit</p>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <p className="link link-hover">Terms of use</p>
        <p className="link link-hover">Privacy policy</p>
        <p className="link link-hover">Cookie policy</p>
      </div>
    </footer>
  );
};

export default Footer;
