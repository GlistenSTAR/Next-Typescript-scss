import Image from 'next/image'

import Logo from '../../Assets/img/logo.png'

const Header:React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <Image 
                src={Logo}
                alt="Logo"
                width="108"
                height="20"
              />
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Features</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">ISPO</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
          <button className="btn btn-primary navbar-btn">Launch App</button>
        </div>
      </nav>
      
      <style jsx>{`
        .navbar .container{
          margin-left:500px
          margin-right:500px
        }
        .nav.navbar-nav{
          flex-direction: row;
        }
        .nav.navbar-nav li{
          padding: 20px;
          padding-top: 0;
          padding-bottom: 0;
        }
        .nav.navbar-nav li a{
          text-decoration: none;
          color: black
        }
        .navbar button{
          background-color: #DC3545;
          padding: 10px 20px;
          border-radius: 0;
          font-size: 16px;
          font-weight: 700;
          border-color: #DC3545;
        }
        .navbar button:hover{
          border-color: #83B4FF;
          background-color: #83B4FF;
        }
        @media (max-width: 1024px) {
          nav .container{
            padding: auto 20px;
          }
        }
        @media (max-width: 768px) {
          .nav.navbar-nav, button{
            display: none
          }
        }
      `}</style>
    </>
  );
};
export default Header;