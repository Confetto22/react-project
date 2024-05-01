import "./Footer.css";
import logo from "../../../public/images/logo 1.svg";
import instagramIcon from "../../../public/images/instagramIcon.svg";
import twitterIcon from "../../../public/images/twitterIcon.svg";
import youtubeIcon from "../../../public/images/youtubeIcon.svg";
import facebookIcon from "../../../public/images/facebookIcon.svg";
import linkedinIcon from "../../../public/images/linkedinIcon.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer_group">
        <div className="footerFirst">
          <img src={logo} className="footer_logo" />
          <p className="footerFirst_text">
            Sri Lanka's first & largest designed to create an online marketplace
            exclusively for RENT
          </p>
          <div className="socials">
            <img src={instagramIcon} />
            <img src={twitterIcon} />
            <img src={youtubeIcon} />
            <img src={facebookIcon} />
            <img src={linkedinIcon} />
          </div>
        </div>

        <div className="footer_navigation">
          <h5 className="navigation_heading">Navigation</h5>
          <p>About Us</p>
          <p>Blog</p>
          <p>Terms of Use</p>
          <p>privacy Policy</p>
        </div>

        <div className="footer_locations">
          <h5 className="location_heading">Featured Locations</h5>
          <p>Kandy</p>
          <p>Anurdhapura</p>
          <p>Badulla</p>
          <p>Colombo</p>
          <p>Kaluthara</p>
        </div>

        <div className="footer_help">
          <h5 className="help_heading">Help</h5>
          <p>FAQ</p>
          <p>Contact Us</p>
        </div>

        <div className="footer_newsletter">
          <h5 className="newsletter_heading">Subscribe to Our Newsletter</h5>
          <p>Stay updated with the latest listings and rental tips</p>
          <input
            type="text"
            placeholder="Email Address"
            className="mail_input"
          />
          <button className="footer_subscribe">Subscribe</button>
        </div>
      </div>
      <div className="copyright">
        <p> &copy; Copyright 2024, Designed and </p>
        <p> Developed by Confetto </p>
      </div>
    </footer>
  );
};

export default Footer;
