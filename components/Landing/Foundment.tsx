import Card from '../commons/Card'

import card_data from '../../datas/card_data.json';

const cards = card_data.data.map((item, key)=>(
  <Card 
    title={item.title}
    content={item.content}
    key={key}
  />
));

const Foundment: React.FC = () => {
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
        .row{
          margin-top: 50px
        }
      `}</style>
    </div>
  );
}


export default Foundment;