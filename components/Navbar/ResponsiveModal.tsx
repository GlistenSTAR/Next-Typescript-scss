import Modal from 'react-modal'
Modal.setAppElement('*');
import Image from 'next/image'

import Logo from '../../assets/img/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressArrowsAlt, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import styles from './modal.module.scss'

const customStyles = {
  content: {
    top: '3%',
    left: '50%',
    right: 'auto',
    width:'95%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, 0)',
  },
};

const ResponsiveModal = ({show, close}) => {
  return (
    <>
      <Modal
        isOpen={show}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.modal} >
          <a className="navbar-brand" href="/">
            <Image 
              src={Logo}
              alt="Logo"
              width="108"
              height="20"
            />
          </a>
          <div onClick={close} style={{float:'right'}}>
            <FontAwesomeIcon icon={faCompressArrowsAlt}/>
          </div>
        </div>

        <hr/>
        
        <div>
          <ul className="nav navbar-nav">
            <li className={styles.modal__item}><a href="https://docs.maladex.com/whitepaper.pdf">WhitePaper</a></li>
            <li className={styles.modal__item}>
              <FontAwesomeIcon icon={faAngleDown}/>
              Info
              <dl style={{padding: '5px 20px', marginBottom:'0px'}}>
                <dd><a href="#">Tokenomics</a></dd>
                <dd><a href="#">FAQ</a></dd>
              </dl>
            </li>
            <li className={styles.modal__item}>
              <FontAwesomeIcon icon={faAngleDown}/>
              Pool
              <dl style={{padding: '5px 20px', marginBottom:'0px'}}>
                <dd><a href="#">Pools</a></dd>
                <dd><a href="#">Distribution</a></dd>
                <dd><a href="#">FAQ</a></dd>
                <dd><a href="#">Formula</a></dd>
              </dl>
            </li>
            <li className={styles.modal__item}><a href="#">Press</a></li>
          </ul>
        </div>
      </Modal>
    </>
  );
}

export default ResponsiveModal;