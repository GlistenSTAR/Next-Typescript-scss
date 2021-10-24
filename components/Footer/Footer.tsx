import Image from 'next/image'

const Footer = () => {
  return (
    <div className="container footer">
      <div className="footer_header" style={{display:'flex'}}>
        <div className="col-md-3 col-sm-6 col-12">
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Image
              src={ require('../../assets/img/scientist.png')}
              width="200"
              height="200"
            />
            <p>
              This is a short paragraph to talk about the company itself. This could be a quick 1-2 sentences. Or even a mission statement.
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-12 menus">
          <h2>About Us</h2>
          <a href="#">Partner Help</a>
          <a href="#">careers</a>
          <a href="#">press center</a>
          <a href="#">investor relations</a>
          <a href="#">terms & conditions</a>
        </div>
        <div className="col-md-3 col-sm-6 col-12 menus">
          <h2>Product</h2>
          <a href="#">features</a>
          <a href="#">pricing</a>
          <a href="#">apps</a>
          <a href="#">API</a>
          <a href="#">support</a>
          <a href="#">Customers</a>
        </div>
        <div className="col-md-3 col-sm-6 col-12 menus">
          <h2>resouces</h2>
          <a href="#">customers</a>
          <a href="#">whitepaper</a>
          <a href="#">Dev API</a>
          <a href="#">Media coverage</a>
          <a href="#">GFPY</a>
          <a href="#">Influencers</a>
        </div>
      </div>
      <hr/>
      <div className="footer_bottom">
        <div>
          Copyright © 2021. Maladex All rights reserved.
        </div>
        <div className="round_buttons">
          <div>
            <Image 
              src={require('../../assets/img/icons/f.png')}
              width="40"
              height="40"
            />
          </div>
          <div>
            <Image 
              src={require('../../assets/img/icons/t.png')}
              width="40"
              height="40"
            />
          </div>
          <div>
            <Image 
              src={require('../../assets/img/icons/v.png')}
              width="40"
              height="40"
            />
          </div>
          <div>
            <Image 
              src={require('../../assets/img/icons/i.png')}
              width="40"
              height="40"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer{
          padding-top: 130px
        }
        .footer .col-md-3{
          padding: 0 30px;
        }
        .menus{
          display: flex;
          flex-direction: column;
        }
        .footer_header p{
          font-size: 15px;
          color : #6d859e
        }
        .menus h2{
          text-align: center;
          font-size: 20px;
          text-transform: uppercase;
        }
        .menus a{
          text-align: left;
          text-transform: capitalize;
          padding-top: 7px;
          font-size: 17px;
          color : #6d859e
        }
        .footer hr{
          margin:30px 20px;
        }
        .footer_bottom{
          color: #6d859e;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .round_buttons{
          display: flex;
          flex-direction: row;
        }
        .round_buttons div{
          padding: 0 7px;
        }
      `}</style>
    </div>
  );
}

export default Footer;