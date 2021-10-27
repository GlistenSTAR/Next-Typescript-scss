import Modal from 'react-modal'
Modal.setAppElement('*');
import Image from 'next/image'

import Logo from '../../assets/img/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressArrowsAlt } from "@fortawesome/free-solid-svg-icons";


import styles from './modal.module.scss'

const customStyles = {
  content: {
    top: '8%',
    left: '50%',
    right: 'auto',
    width:'95%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
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
        
      </div>
    </Modal>
    </>
  );
}

export default ResponsiveModal;