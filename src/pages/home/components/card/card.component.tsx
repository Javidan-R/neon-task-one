import React, { useMemo } from 'react';
import { useStyles } from './card.style'; 
import { Link } from 'react-router-dom';
export interface CardProps {
  name: string;
  title: string;
  img: string;
  background:string;
}
const Card: React.FC<CardProps> = ({ name, title, img, background }) => {
  const classes = useStyles();
  
  const memoizedClasses = useMemo(
    () => ({
      card: classes.card,
      cover: classes.cover,
      img: classes.img,
      name: classes.name,
      title: classes.title,
      button: classes.button,
    }),
    [classes]
  );

  return (
    <div className={memoizedClasses.card}>
      <div
        className={memoizedClasses.cover}
        style={{ backgroundImage: `url(${background})` }}>
        <img alt={name} src={img} className={memoizedClasses.img} />
      </div>
      <h3 className={memoizedClasses.name}>{name}</h3>
      <p className={memoizedClasses.title}>{title}</p>
      <Link to={'/'}>
        <button className={memoizedClasses.button}>Подробнее</button>
      </Link>
    </div>
  );
};

export default Card;
