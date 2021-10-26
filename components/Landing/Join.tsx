import { useState, useEffect } from 'react';
import Image from 'next/image'

import styles from '../../styles/Home.module.scss'
import samurai from '../../assets/img/samurai.png'

const Join = () => {
  let [width, setWidth] = useState(null);
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      setWidth(window.screen.width);
    }
  }, []);


  return (
      <div className={`container mt-5 ${styles.join_us}`}>
        <div className={`col-md-6 col-sm-6 col-12 ${styles.join_us__content_group}`}>
          <div className="content">
            <h2>Join a community of intelligent investors</h2>
            <p>We take a huge amount of pride in our community of intelligent investors. On all our social channels we have detailed discussions about the platform, investing, and crypto at large.</p>
          </div>
          <div className={`${styles.join_us__link_groups}`}>
            <div className={`${styles.join_us__link_icon}`}>
              <Image src= { require('../../assets/img/icons/twitter.svg')} width="25" height="25"/>
              <span className="mt-2">Twitter</span>
            </div>
            <div className={`${styles.join_us__link_icon}`}>
              <Image src= { require('../../assets/img/icons/medium.svg')} width="25" height="25"/>
              <span className="mt-2">Mediumn</span>
            </div>
            <div className={`${styles.join_us__link_icon}`}>
              <Image src= { require('../../assets/img/icons/reddit.svg')} width="25" height="25"/>
              <span className="mt-2">Reddit</span>
            </div>
            <div className={`${styles.join_us__link_icon}`}>
              <Image src= { require('../../assets/img/icons/discard.svg')} width="25" height="25"/>
              <span className="mt-2">Discard</span>
            </div>
            <div className={`${styles.join_us__link_icon}`}>
              <Image src= { require('../../assets/img/icons/telegram.svg')} width="25" height="25"/>
              <span className="mt-2">Telegram</span>
            </div>
          </div>
        </div>
        <div className={`col-md-6 col-sm-6 col-12 ${styles.join_us__large_image}`}>
          <Image 
            src={samurai}
            width={ width !=null || width > 768 ? width : '440'} 
            height={ width !=null || width > 768 ? width : '440'}  
          />
        </div>
    </div>
          
  );
}

export default Join;