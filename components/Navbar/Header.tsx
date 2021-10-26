import Image from 'next/image'

import Logo from '../../assets/img/logo.png'
import styles from '../../styles/Navbar.module.scss'

const Header:React.FC = () => {
  return (
    <>
      <nav className={`navbar navbar-inverse ${styles.navbar}`}>
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
          <ul className={`nav ${styles.navbar_nav}`}>
            <li className="active"><a href="#">Features</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">ISPO</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
          <button className={styles.navbar_btn}>Launch App</button>
        </div>
      </nav>
    </>
  );
};
export default Header;