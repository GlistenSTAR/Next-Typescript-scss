import Image from 'next/image'
import samurai from '../../assets/img/samurai.png'

const Join = () => {
  return (
    <div className="container">
      <div className="join_us mt-5">
        <div className="col-md-6 col-sm-12 col-12 content_group" style={{display:'flex', flexDirection:'column'}}>
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
        
        <div className="col-md-6 col-sm-12 col-12">
          <Image 
            src={samurai}
            width="440" 
            height="440"
          />
        </div>
      </div>
        <style jsx>{`
          .join_us{
            display:flex;
            padding-top: 150px;
            padding-left: 23px;
            padding-right: 23px;
            flex-direction: row;
          }
          .join_us div{
            display:flex;
            justify-content: center;
          }
          .join_us .content{
            display: flex;
            flex-direction: column;
          }
          .join_us div.link_groups{
            justify-content: flex-start;
          }
          .link_icon{
            display: flex;
            flex-direction: column;
            padding: 20px 20px;
            font-size:14px;
          }
        `}</style>
    </div>
          
  );
}

export default Join;