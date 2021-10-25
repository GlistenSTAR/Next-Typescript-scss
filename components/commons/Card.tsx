type Props = {
  title: string
  content: string
}

const Card: React.FC<Props> = ({title, content}) => {
  return (
    <div className="col-md-4 col-sm-12 col-xs-12">
      <div className="card"> 
        <h3>{title}</h3>
        <p>{content}</p>
        <button className="btn btn-danger">Learn More</button>
      </div>
      <style jsx>{`
        .card{
          posistion: relative;
          padding: 20px 25px;
          float: left;
          color: rgb(84, 102, 129);
          background-color: white;
          border: none;
          border-radius: 20px;
          min-height: 400px;
          box-shadow: rgb(0 22 50 / 6%) 14px 14px 200px 0px;
        }
        .card:hover{
          margin-top: -10px;
          transition: ease-in-out .3s;
        }
        .card p{
          max-width: 320px;
          font-size: 17px;
          padding-bottom: 20px
        }
        .card button{
          position: absolute;
          bottom: 20px;
          width: 180px;
          border-radius: 50px;
          padding: 14px 35px;
        }
        .card h3{
          font-size: 24px
        }

        @media (max-width: 1200px) {
          .card{
            min-height: 450px
          }
        }
        @media (max-width: 990px) {
          .col-md-4{
            width: 100%
          }
          .card{
            min-height: 0px;
            margin: 20px 0;
          }
          .card p{
            max-width: 1000px;
          }
          .card button{
            position: relative;
            bottom: 20px;
            width: 180px;
            border-radius: 50px;
            padding: 14px 35px;
            margin-right:0px;
            min-height: auto
          }
          .card:hover{
            margin-top: 0px;
            transition: ease-in-out .3s;
          }
        }
      `}</style>
    </div>
  );
}

export default Card;