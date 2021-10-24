import Image from 'next/image'

import linkedin from '../../assets/img/socials/linkedin.svg'
import buffer from '../../assets/img/socials/buffer.svg'
import eventbrite from '../../assets/img/socials/eventbrite.svg'
import algolia from '../../assets/img/socials/algolia.svg'
import behance from '../../assets/img/socials/behance.svg'

const Socials = () => {
  return (
    <div className="container socials">
      <div><Image src={linkedin} width="130"/></div>
      <div><Image src={eventbrite} width="130"/></div>
      <div><Image src={algolia} width="130"/></div>
      <div><Image src={behance} width="130"/></div>
      <div><Image src={buffer} width="130"/></div>
      
      <style jsx>{`
        .socials{
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .socials div{
          float: left;
          margin: 0px 20px;
          padding: 20px
        }
      `}</style>
    </div>
  );
}

export default Socials;