function Card({title, content}) {
  return (
    <div className="col-md-4">
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
          transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(
            0deg
            ) rotateY(
            0deg
            ) rotateZ(
            0deg
            ) skew(
            0deg
            , 
            0deg
            );
                transform-style: preserve-3d;
            }
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
          .card button{
            position: absolute;
            bottom: 20px;
            width: 180px;
            border-radius: 50px;
            padding: 14px 35px;
            margin-right:10px
            min-height: auto
          }
        }
      `}</style>
    </div>
  );
}

export default Card;