import Image from 'next/image'
import { useState } from 'react'

import Red_orgo from '../../assets/img/red_orgo.png'

const Research = () => {
  const [showNumber, setNumber] = useState(null);

  const toogle = (id) => {
    setNumber(id)
  }

  return (
    <>
      <div className="research">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-12 pl-3 left_text">
            <h1>The Research Driven Cardano DEX</h1>
            <p>A technically superior DEX built by Quants and Haskell natives. <br/>
              Providing advanced trading tools previously only available to the Tradfi elite.</p>
            <div className="button_group">
              <button className="btn btn-danger">White Paper</button>
              <button className="btn btn-default">Lite Paper</button>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-12 right_image">
            <Image 
              src={Red_orgo}
              width="410"
              height="390"
            />
          </div>
        </div>
        <div className="tab_group">
          <div className="row text-center">
            <div className="col-md-4 overlay">
              <div className="position-relative">
                <div className="child-overlay position-absolute">
                  <div className="text">
                    Learn more
                  </div>
                </div>
                <div className="tab_text">Core ideas</div>
              </div>
            </div>
            <div className="col-md-4 overlay">
              <div className="position-relative">
                <div className="child-overlay position-absolute">
                  <div className="text">
                    Learn more
                  </div>
                </div>
                <div className="tab_text">ROAD MAp</div>
              </div>
            </div>
            <div className="col-md-4 overlay">
              <div className="position-relative">
                <div className="child-overlay position-absolute">
                  <div className="text">
                    Learn more
                  </div>
                </div>
                <div className="tab_text">JOIN Us</div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .research{
            align-items: center;
            min-height: 611px;
            margin-top: auto;
            padding-top: 60px;
            color : rgb(84, 102, 129);
            margin-bottom: 100px
          }
          .research .row{
            position: relative;
            height: 100%;
          }
          .research .left_text{
            position: relative;
            margin-top: auto;
            margin-bottom: auto;
            padding-left: 20px;
          }
          .research p{
            font-size: 17px;
            max-width: 490px
          }
          
          .research .right_image{
            padding: 30px;
            display: flex;
            justify-content:space-around
          }
          .research .right_image img{
            height: 450px;
          }
            
          .tab_group{
            text-transform: uppercase;
            padding-top: 150px
          }
          .tab_group .row .col-md-4{
            padding-left: 0;
            padding-right: 0
          }
          .overlay{
            border-top: 1px solid #DC3545
          }
          .overlay .position-relative{
            display:flex;
            justify-content: center;
          }
          .tab_text{
            padding-top:7px;
            padding-bottom:7px;
            text-trasform: uppercase;
            border-bottom: 1px solid rgba(136, 158, 168, 0.2);
            width: 80%;
          }
          .child-overlay {
            position: absolute;
            bottom: 38px;
            left: 0;
            right: 0;
            height: 0;
            transition: .5s ease;
            background-color: #DC3545;
          }
          .overlay:hover .child-overlay {
            height: 100%;
            transition: height ease-in-out .3s;
          }
          .overlay:hover .text{
            display: block
          }
          .text {
            display: none;
            color: white;
            font-size: 12px;
            position: absolute;
            top: 50%;
            left: 50%;
            padding-top: 5px;
            padding-bottom: 5px;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            text-align: center;
          }

          @media (max-width: 992px) {
            .research{
              padding-top: 30px
            }
            .research .left_text{
              padding: 0px 200px;
              text-align: center
            }
            .research .left_text p{
              text-align: center
            }
            .research p{
              font-size: 17px;
              max-width: 1000px;
            }
            .tab_group{
              text-transform: uppercase;
              padding-top: 70px
            }
          }
          @media (max-width: 768px) {
            .research .left_text{
              padding: 0px 50px;
              text-align: center
            }
            .overlay{
              border-top: none
            }
          }
          @media (max-width: 625px) {
            .research .left_text{
              padding: 0px 0px;
              text-align: center
            }
          }
        `}</style>
      </div>
    </>
  );
}

export default Research;