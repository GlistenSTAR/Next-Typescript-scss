import Image from 'next/image'
import styles from '../../styles/Home.module.scss'

import Red_orgo from '../../assets/img/red_orgo.png'

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
              <button className="btn btn-danger">White Paper</button>
              <button className="btn btn-default">Lite Paper</button>
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
        <div className={styles.tabgroup}>
          <div className="row text-center">
            <div className={`col-md-4 ${styles.tabgroup__overlay}`}>
              <div className={`position-relative ${styles.tabgroup__relative}`}>
                <div className={`position-absolute${styles.research_child_overlay}`}>
                  <div className={styles.tabgroup__text}>
                    Learn more
                  </div>
                </div>
                <div className={styles.tabgroup__tabtext}>Core ideas</div>
              </div>
            </div>
            <div className={`col-md-4 ${styles.tabgroup__overlay}`}>
              <div className={`position-relative ${styles.tabgroup__relative}`}>
                <div className={`position-absolute${styles.research_child_overlay}`}>
                  <div className={styles.tabgroup__text}>
                    Learn more
                  </div>
                </div>
                <div className={styles.tabgroup__tabtext}>ROAD MAp</div>
              </div>
            </div>
            <div className={`col-md-4 ${styles.tabgroup__overlay}`}>
              <div className={`position-relative ${styles.tabgroup__relative}`}>
                <div className={`position-absolute${styles.research_child_overlay}`}>
                  <div className={styles.tabgroup__text}>
                    Learn more
                  </div>
                </div>
                <div className={styles.tabgroup__tabtext}>JOIN Us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Research;