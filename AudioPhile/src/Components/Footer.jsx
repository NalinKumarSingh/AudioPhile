import React from 'react';
import styles from './Footer.module.css'; // Ensure this is the correct path to your CSS file
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className={`mb-3 me-2 mb-md-0 ${styles.textBodySecondary} text-decoration-none lh-1`}>
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <span className={`mb-3 mb-md-0 ${styles.textBodySecondary}`}>© 2024 audioPhile, Inc  @NAL1N_S1NGH</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className={styles.textBodySecondary} href="#">
              <FaInstagram></FaInstagram>
            </a>
          </li>
          <li className="ms-3">
            <a className={styles.textBodySecondary} href="#">
              <FaSquareXTwitter></FaSquareXTwitter>
            </a>
          </li>
          <li className="ms-3">
            <a className={styles.textBodySecondary} href="#">
              <FaFacebook></FaFacebook>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
