import styles from './Card.module.scss';

type Props = {
  title: string
  content: string
}

const Card: React.FC<Props> = ({title, content}) => {
  return (
    <div className="col-md-4 col-sm-12 col-xs-12">
      <div className={styles.card}> 
        <h3 className={styles.card__title}>{title}</h3>
        <p>{content}</p>
        <button className={styles.card__btn_learn}>Learn More</button>
      </div>
    </div>
  );
}

export default Card;