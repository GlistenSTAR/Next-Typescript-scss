import Image from 'next/image'
import styles from '../../styles/Home.module.scss'

import linkedin from '../../assets/img/socials/linkedin.svg'
import buffer from '../../assets/img/socials/buffer.svg'
import eventbrite from '../../assets/img/socials/eventbrite.svg'
import algolia from '../../assets/img/socials/algolia.svg'
import behance from '../../assets/img/socials/behance.svg'

const Socials: React.FC = () => {
  return (
    <div className={`container ${styles.socials}`}>
      <div><Image src={linkedin} width="130"/></div>
      <div><Image src={eventbrite} width="130"/></div>
      <div><Image src={algolia} width="130"/></div>
      <div><Image src={behance} width="130"/></div>
      <div><Image src={buffer} width="130"/></div>
    </div>
  );
}

export default Socials;