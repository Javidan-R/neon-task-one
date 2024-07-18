// src/components/ParticipantCard.tsx
import React from 'react';
import { Card, Button } from 'antd';
import { createUseStyles } from 'react-jss';

interface ParticipantCardProps {
  name: string;
  title: string;
  img: string;
  background: string;
}

const useStyles = createUseStyles({
  card: {
    width: '100%',
    maxWidth: 394,
    height: 462,
    textAlign: 'center',
    margin: 'auto',
    overflow: 'hidden',
  },
  img: {
        backgroundImage: ({ background }: { background: string }) => `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '50%',
    width: '200px',
    height: '200px',
    margin: '20px auto',
  },
  button: {
    marginTop: 10,
  }
});

const ParticipantCard: React.FC<ParticipantCardProps> = ({ name, title, img, background  }) => {
  const classes = useStyles({ background });

  return (
    <Card
      hoverable
      className={classes.card}
      cover={<img alt={name} src={img} className={classes.img} />}
    >
      <Card.Meta title={name} description={title} />
      <Button type="primary" className={classes.button}>Подробнее</Button>
    </Card>
  );
};

export default ParticipantCard;
