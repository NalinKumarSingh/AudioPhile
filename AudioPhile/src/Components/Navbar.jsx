import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import styles from './Navbar.module.css';

const Navbar = ({currentstate ,HandleCurrentState}) => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
        <div className="container">
          <a className={`navbar-brand ${styles['navbar-brand-fancy']}`} href="#">
            audioPhile
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasLabel">Aperture</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1 justify-content-between">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg className="bi" width="24" height="24"><use xlinkHref="#aperture"></use></svg>
                  </a>
                </li>
                <li className="nav-item"><a className={`nav-link ${currentstate === 'Home' ? styles['active-link'] : ''}`}  href="#"  onClick={()=>HandleCurrentState('Home')}>HOME</a></li>
                <li className="nav-item"><a className={`nav-link ${currentstate === 'Headphones' ? styles['active-link'] : ''}`} href="#" onClick={()=>HandleCurrentState('Headphones')}>HEADPHONES</a></li>
                <li className="nav-item"><a className={`nav-link ${currentstate === 'Speakers' ? styles['active-link'] : ''}`} href="#"onClick={()=>HandleCurrentState('Speakers')}>SPEAKERS</a></li>
                <li className="nav-item"><a className={`nav-link ${currentstate === 'Earphones' ? styles['active-link'] : ''}`} href="#"onClickCapture={()=>HandleCurrentState('Earphones')}>EARPHONES</a></li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <IoCartOutline className={styles['cart-icon']} onClickCapture={()=>HandleCurrentState('Cart')}/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
