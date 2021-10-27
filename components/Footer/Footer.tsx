import Image from 'next/image'
import styles from './Footer.module.scss';
import { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [show, setShow] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;

    if (position > 20) {
      setShow(1);
    } else {
      setShow(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`container ${styles.footer}`}>
      <div className={styles.footer__header}>
        <div className="col-md-3 col-sm-6 col-12">
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Image
              src={ require('../../assets/img/scientist.png')}
              width="200"
              height="200"
            />
            <p>
              This is a short paragraph to talk about the company itself. This could be a quick 1-2 sentences. Or even a mission statement.
            </p>
          </div>
        </div>
        <div className={`col-md-3 col-sm-6 col-12 ${styles.footer__menus}`}>
          <h2>About Us</h2>
          <a href="#">Partner Help</a>
          <a href="#">careers</a>
          <a href="#">press center</a>
          <a href="#">investor relations</a>
          <a href="#">terms & conditions</a>
        </div>
        <div className={`col-md-3 col-sm-6 col-12 ${styles.footer__menus}`}>
          <h2>Product</h2>
          <a href="#">features</a>
          <a href="#">pricing</a>
          <a href="#">apps</a>
          <a href="#">API</a>
          <a href="#">support</a>
          <a href="#">Customers</a>
        </div>
        <div className={`col-md-3 col-sm-6 col-12 ${styles.footer__menus}`}>
          <h2>resouces</h2>
          <a href="#">customers</a>
          <a href="#">whitepaper</a>
          <a href="#">Dev API</a>
          <a href="#">Media coverage</a>
          <a href="#">GFPY</a>
          <a href="#">Influencers</a>
        </div>
      </div>
      <hr/>
      <div className={styles.footer__bottom}>
        <div>
          Copyright © 2021. Maladex All rights reserved.
        </div>
        <div className={styles.footer__round_buttons}>
          <a href="https://twitter.com/CardanoMaladex" target="_blank">
            <Image src={require('../../assets/img/icons/twitter.svg')}/>
          </a>
          <a href="https://reddit.com/r/maladex" target="_blank">
            <Image src={require('../../assets/img/icons/reddit.svg')}/>
          </a>
          <a href="https://bit.ly/maladex-dc" target="_blank">
            <Image src={require('../../assets/img/icons/discord.svg')}/>
          </a>
          <a href="https://t.me/maladex" target="_blank">
            <Image src={require('../../assets/img/icons/telegram.svg')}/>
          </a>
        </div>
      </div>

      {show ? (<a className={styles.backtotop} href="#header"></a> ):''}
    </div>
  );
}

export default Footer;