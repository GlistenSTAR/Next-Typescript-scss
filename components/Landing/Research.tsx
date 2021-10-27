import Image from 'next/image'
import styles from '../../styles/Home.module.scss'

import Red_orgo from '../../assets/img/red_orgo.png'
import handle from '../../assets/img/adahandle.png'

const Research: React.FC = () => {
  return (
    <>
      <div className={styles.research}>
        <div className="row">
          <div className={`col-md-6 col-sm-12 col-12 pl-3 ${styles.research__left_text}`}>
            <h1>The Research Driven Cardano DEX</h1>
            <p>A technically superior DEX built by Quants and Haskell natives. <br/>
              Providing advanced trading tools previously only available to the Tradfi elite.</p>
            <div className="button_group">
              <a href="https://docs.maladex.com/whitepaper.pdf" target="_blank"><button className={styles.research__btn_white_paper}>White Paper</button></a>
              <button className={styles.research__btn_lite_paper}>Lite Paper</button>
            </div>
          </div>
          <div className={`col-md-6 col-sm-12 col-12 ${styles.research__right_image}`}>
            <Image 
              src={Red_orgo}
              width="410"
              height="390"
            />
          </div>
        </div>

        <div className="handle mt-5 text-center">
          <h2 className="display-2 text-center mb-3" style={{fontSize:'2.75rem'}}>Partners</h2>
          <a href="https://adahandle.com/">
            <Image 
              src={handle}
            />
          </a>
        </div>

        <div className={styles.tabgroup}>
          <div className="row text-center">
            <div className={`col-md-4 ${styles.tabgroup__overlay}`}>
              <div className={`position-relative ${styles.tabgroup__relative}`}>
                <div className={`position-absolute ${styles.tabgroup__child_overlay}`}>
                  <div className={styles.tabgroup__text}>
                    Learn more
                  </div>
                </div>
                <div className={styles.tabgroup__tabtext}><a href="#fundament">CORE IDEARS</a></div>
              </div>
            </div>
            <div className={`col-md-4 ${styles.tabgroup__overlay}`}>
              <div className={`position-relative ${styles.tabgroup__relative}`}>
                <div className={`position-absolute${styles.tabgroup__child_overlay}`}>
                  <div className={styles.tabgroup__text}>
                    Learn more
                  </div>
                </div>
                <div className={styles.tabgroup__tabtext}><a href="#future">ROAD MAP</a></div>
              </div>
            </div>
            <div className={`col-md-4 ${styles.tabgroup__overlay}`}>
              <div className={`position-relative ${styles.tabgroup__relative}`}>
                <div className={`position-absolute${styles.tabgroup__child_overlay}`}>
                  <div className={styles.tabgroup__text}>
                    Learn more
                  </div>
                </div>
                <div className={styles.tabgroup__tabtext}><a href="#contact">JOIN US</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Research;