import { useState, useEffect } from 'react';
import Image from 'next/image'
import samurai from '../../assets/img/samurai.png'

const Join = () => {
  let [width, setWidth] = useState(null);
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      setWidth(window.screen.width);
    }
  }, []);


  return (
      <div className="container join_us mt-5">
        <div className="col-md-6 col-sm-6 col-12 content_group">
          <div className="content">
            <h2>Join a community of intelligent investors</h2>
            <p>We take a huge amount of pride in our community of intelligent investors. On all our social channels we have detailed discussions about the platform, investing, and crypto at large.</p>
          </div>
          <div className="link_groups">
            <div className="link_icon">
              <Image src= { require('../../assets/img/icons/twitter.svg')} width="25" height="25"/>
              <span className="mt-2">Twitter</span>
            </div>
            <div className="link_icon">
              <Image src= { require('../../assets/img/icons/medium.svg')} width="25" height="25"/>
              <span className="mt-2">Mediumn</span>
            </div>
            <div className="link_icon">
              <Image src= { require('../../assets/img/icons/reddit.svg')} width="25" height="25"/>
              <span className="mt-2">Reddit</span>
            </div>
            <div className="link_icon">
              <Image src= { require('../../assets/img/icons/discard.svg')} width="25" height="25"/>
              <span className="mt-2">Discard</span>
            </div>
            <div className="link_icon">
              <Image src= { require('../../assets/img/icons/telegram.svg')} width="25" height="25"/>
              <span className="mt-2">Telegram</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-12 large_image">
          <Image 
            src={samurai}
            width={ width !=null || width > 768 ? width : '440'} 
            height={ width !=null || width > 768 ? width : '440'}  
          />
        </div>
        <style jsx>{`
          .join_us{
            display:flex;
            flex-direction: row;
            align-items: center;
            padding-top: 50px;
          }
          .join_us .content{
            display: flex;
            flex-direction: column;
          }
          .join_us .link_groups{
            display: flex;
            flex-direction: row;
          }
          .link_icon{
            display: flex;
            flex-direction: column;
            padding: 20px 20px;
            font-size:14px;
          }

          @media (max-width: 992px) {
            .col-md-6 {
                width: 50%;
            }
          }
          @media (max-width: 768px) {
            .col-md-6 {
                width: 100%;
            }
            .join_us{
              display:flex;
              flex-direction: column;
              align-items: center;
              padding-top: 50px;
              text-align: center
            }
            .join_us .link_groups{
              display: flex;
              flex-direction: row;
              justify-content: center;
            }
          }
          @media (max-width: 440px) {
            .link_icon{
              padding: 10px 10px;
            }
          }
        `}</style>
    </div>
          
  );
}

export default Join;