import Card from '../commons/Card'

import card_data from '../../datas/card_data.json';

const cards = card_data.data.map((item, key)=>(
  <Card 
    title={item.title}
    content={item.content}
    key={key}
  />
));

function Foundment() {
  return (
    <div className="foundment">
      <div className="header">
        <h6>THE FUNDAMENTALS</h6>
        <h1>A DEX Built Better</h1>
      </div>
      <div className="row">
        {cards}
      </div>

      <style jsx>{`
        .foundment {
          // margin-top: 20px
        }
        .foundment h1 {
          color: #661A1B;
          font-weight: bold;
          letter-spacing: 2px
        }
        .foundment h6 {
          color: rgb(197, 4, 10);
          font-size: 14px; 
          letter-spacing: 4px;
          font-weight: bold
        }
        .row{
          margin-top: 50px
        }
      `}</style>
    </div>
  );
}


export default Foundment;