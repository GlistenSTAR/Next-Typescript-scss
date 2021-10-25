
import Image from 'next/image'

type Props = {
  title: string
  content: string
  icon: string
}

const FeatureItem: React.FC<Props> = ({icon, title, content}) => {
  return (
    <div className="feature_item col-md-4 col-sm-6">
      <Image 
        src={ require(`../../assets/img/icons/${icon}.png`) }
        width="120"
        height="120"
      />
      <div>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <p>{content}</p>
        </div>
      </div>

      <style jsx>{`
        .feature_item{
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 20px 15px;
          float:left
        }
        .feature_item h3{
          font-size: 20px;
          line-height: 1.2;
          color: #333
        }
        .feature_item p{
          font-size: 15px;
          line-height: 1.5;
          color: #9c9c9c
        }
      `}</style>
    </div>
  );
}

export default FeatureItem;