import Image from 'next/image'

import Logo from '../../assets/img/logo.png'
import styles from '../../styles/Navbar.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Header:React.FC = () => {
  return (
    <>
      <nav className={`navbar navbar-inverse ${styles.navbar}`} id="header">
        <div className="container">
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
              <a className="nav-link" href="#">White Paper</a>
            </li>
            <div className={styles.navbar__dropdown}>
              <button className="dropbtn">
                <FontAwesomeIcon icon={faAngleDown}/>
                Info 
              </button>
              <div className="dropdown-content">
                <a href="#">Partners</a>
                <a href="#">Features</a>
                <a href="#">Roadmap</a>
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
                <a href="#">Rewards</a>
                <a href="#">Formula</a>
              </div>
            </div> 
            <li className="nav-item">
              <a className="nav-link" href="#">Press</a>
            </li>
          </ul>
          <button className={styles.navbar_btn}>Launch App</button>
        </div>
      </nav>
    </>
  );
};
export default Header;