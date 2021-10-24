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
            <div className="col-md-4">
              <div className="empty_space">{showNumber===1?<div className="learn_more">Learn More</div>:null}</div>
              <div className="tab_text" onMouseEnter={() => toogle(1)} onMouseLeave={()=>toogle(0)}>Core ideas</div>
            </div>
            <div className="col-md-4">
              <div className="empty_space">{showNumber===2?<div className="learn_more">Learn More</div>:null}</div>
              <div className="tab_text" onMouseEnter={() => toogle(2)} onMouseLeave={()=>toogle(0)}>ROAD MAp</div>
            </div>
            <div className="col-md-4">
              <div className="empty_space">{showNumber===3?<div className="learn_more">Learn More</div>:null}</div>
              <div className="tab_text" onMouseEnter={() => toogle(3)} onMouseLeave={()=>toogle(0)}>JOIN Us</div>
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
            padding-left: 50px;
            position: relative;
            margin-top: auto;
            margin-bottom: auto;
            padding-left: 50px;
          }
          .research .left_text p{
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
          .button_group{
            margin-left: 30px;
            margin-top: 50px
          }
          .button_group .btn-danger{
            border-radius: 50px;
            padding: 14px 35px;
            margin-right:10px
          }
          .button_group .btn-default:hover{
            color: rgb(72, 77, 255)
          }
  
          .tab_group{
            text-transform: uppercase;
            padding-top: 150px
          }
          .tab_group .row .col-md-4{
            padding-left: 0;
            padding-right: 0
          }
          .tab_group .row .tab_text{
            color: #626d86;
            border-bottom : 1px solid #BBBBBB;
            padding-top: 14px;
            padding-bottom: 14px;
            margin-left:20px;
            margin-right: 20px;
            font-size:12px;
            letter-spacing: 3px;
          }
          .tab_group .empty_space{
            min-height: 28px;
          }
          .tab_group .learn_more{
            width:100%;
            background-color: #DC3545;
            font-size: 12px;
            color: white;
            padding-top: 5px;
            padding-bottom: 5px;
            opacity: 1;
            transition: opacity 3s ease;
          }
          .learn_more:hover {
            opacity:0;
          }
        `}</style>
      </div>
    </>
  );
}

export default Research;