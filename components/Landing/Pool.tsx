import Image from 'next/image'

import scientist from '../../assets/img/scientist.png'

const Pool = () => {
  return (
    <div className="pool">
      <div className="row" style={{float: 'right'}}>
        <div className="col-md-6 col-sm-12">
          <h6>The Mal pool</h6>
          <h1>Join Our ISPO and get the first [MAL] Tokens</h1>
          <p>We are currently running a single pool ticker [MAL] which you can stake to and receive both ADA rewards and MAL tokens. Over 40 million ada in delegation. Our platform tokens will be allocated at launch via airdrop.</p>
          <div className="button_group">
            <button className="btn btn-danger">Join Now</button>
            <button className="btn btn-default">Learn more</button>
          </div>
        </div>
        <div className="col-md-6 col-sm-12" style={{display: 'flex', justifyContent: 'space-around'}}>
          <Image 
            src={scientist}
            width="400"
            height="400"
          />
        </div>
      </div>

      <style jsx>{`
        .pool{
          margin-top: 150px;
        }
        .pool p{
          color: #546681;
          font-size: 17px
        }
        @media (max-width: 992px) {
          .pool .com-md-6.col-sm-12{
            float: right
          }
        }
      `}</style>
    </div>
  );
}

export default Pool;