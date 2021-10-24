function Card({title, content}) {
  return (
    <div className="card col-md-4">
      <h2>{title}</h2>
      <p>{content}</p>
      <button className="mt-5 btn btn-danger">Learn More</button>
      <style jsx>{`
        .card{
          min-height: 350px;
          padding: 20px 25px;
          float: left;
          max-width: 400px;
          margin:0 15px;
          color: rgb(84, 102, 129);
          background-color: white;
          border: none;
          border-radius: 20px;
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
          max-width: 320px
        }
        .card button{
          width: 180px;
          border-radius: 50px;
          padding: 14px 35px;
          margin-right:10px
        }
      `}</style>
    </div>
  );
}

export default Card;