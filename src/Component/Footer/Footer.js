import React from "react";

const Footer = () => {
  return (
    <footer class="footer py-10 px-20 bg-base-200 text-base-content">
      <div>
        <p className="text-4xl">Pc Parts.</p>
        <p>
          Pc Parts. Industries Ltd.
          <br />
          Providing reliable tech since 2005
        </p>
      </div>
      <div>
        <span class="footer-title">Services</span>
        <p class="link link-hover">Branding</p>
        <p class="link link-hover">Design</p>
        <p class="link link-hover">Marketing</p>
        <p class="link link-hover">Advertisement</p>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <p class="link link-hover">About us</p>
        <p class="link link-hover">Contact</p>
        <p class="link link-hover">Jobs</p>
        <p class="link link-hover">Press kit</p>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <p class="link link-hover">Terms of use</p>
        <p class="link link-hover">Privacy policy</p>
        <p class="link link-hover">Cookie policy</p>
      </div>
    </footer>
  );
};

export default Footer;
