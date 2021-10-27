import Image from 'next/image'
import { useState } from 'react'

import Logo from '../../assets/img/logo.png'
import styles from '../../styles/Navbar.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import ResponsiveModal from './ResponsiveModal';

const Header:React.FC = () => {
  let [modal, setModal] = useState(false);

  return (
    <>
      <nav className={`navbar navbar-inverse ${styles.navbar}`} id="header">
        <div className="container" >
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <Image 
                src={Logo}
                alt="Logo"
                width="108"
                height="20"
              />
            </a>
          </div>
          <ul className={`nav ${styles.navbar__nav}`}>
            <li className="nav-item">
              <a className="nav-link" href="https://docs.maladex.com/whitepaper.pdf">White Paper</a>
            </li>
            <div className={styles.navbar__dropdown}>
              <button className="dropbtn">
                <FontAwesomeIcon icon={faAngleDown}/>
                Info 
              </button>
              <div className="dropdown-content">
                <a href="#">Tokenomics</a>
                <a href="#">FAQ</a>
              </div>
            </div> 

            <div className={styles.navbar__dropdown}>
              <button className="dropbtn">
                <FontAwesomeIcon icon={faAngleDown}/>
                Pool 
              </button>
              <div className="dropdown-content">
                <a href="#">Pools</a>
                <a href="#">Distribution</a>
                <a href="#">FAQ</a>
                <a href="#">Formula</a>
              </div>
            </div> 
            <li className="nav-item">
              <a className="nav-link" href="#">Press</a>
            </li>
          </ul>
          <button className={styles.navbar_btn}>Launch App</button>
          <div className={styles.navbar__toogle} onClick={()=>setModal(true)}>
            <FontAwesomeIcon icon={faBars}/>                     
          </div>
        </div>

        <ResponsiveModal
          show={modal}
          close={()=>setModal(false)}
        />
      </nav>
    </>
  );
};
export default Header;