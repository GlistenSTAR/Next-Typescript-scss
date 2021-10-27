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
      <div className={`container mt-5 ${styles.join_us}`} id="contact">
        <div className={`col-md-6 col-sm-6 col-12 ${styles.join_us__content_group}`}>
          <div className="content">
            <h2>Join a community of intelligent investors</h2>
            <p>We take a huge amount of pride in our community of intelligent investors. On all our social channels we have detailed discussions about the platform, investing, and crypto at large.</p>
          </div>
          <div className={`${styles.join_us__link_groups}`}>
            <div className={`${styles.join_us__link_icon}`}>
              <a href="https://twitter.com/CardanoMaladex" target="_blank">
                <Image src= { require('../../assets/img/icons/twitter.svg')}/>
              </a>
              <span>Twitter</span>
            </div>
            <div className={`${styles.join_us__link_icon}`}>
              <a href="https://blog.maladex.com" target="_blank">
                <Image src= { require('../../assets/img/icons/medium.svg')}/>
              </a>
              <span>Medium</span>
            </div>
            <div className={`${styles.join_us__link_icon}`}>
              <a href="https://reddit.com/r/maladex" target="_blank">
                <Image src= { require('../../assets/img/icons/reddit.svg')}/>
              </a>
              <span>Reddit</span>
            </div>
            <div className={`${styles.join_us__link_icon}`}>
              <a href="https://bit.ly/maladex-dc" target="_blank">
                <Image src= { require('../../assets/img/icons/discord.svg')}/>
              </a>
              <span>Discord</span>
            </div>
            <div className={`${styles.join_us__link_icon}`}>
              <a href="https://t.me/maladex" target="_blank">
                <Image src= { require('../../assets/img/icons/telegram.svg')}/>
              </a>
              <span>Telegram</span>
            </div>
          </div>
        </div>
        <div className={`col-md-6 col-sm-6 col-12 ${styles.join_us__large_image}`}>
          <Image 
            src={samurai}
            //  
            width={ '378'} 
            height={ '420'}  
          />
        </div>
    </div>
          
  );
}

export default Join;