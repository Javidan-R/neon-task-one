// src/components/ParticipantSlider.tsx
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { createUseStyles } from 'react-jss';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import cardBackground from '../../../../assets/images/statics/cardBack.png';
import cardImage from '../../../../assets/images/statics/Group 16.png';
import ParticipantCard from './card.component';

const participants = [
  {
    name: 'Хозе-Рауль Капабланка',
    title: 'Чемпион мира по шахматам',
    img: cardImage
  },
  {
    name: 'Эммануил Ласкер',
    title: 'Чемпион мира по шахматам',
    img: 'path/to/image2.jpg'
  },
  {
    name: 'Александр Алехин',
    title: 'Чемпион мира по шахматам',
    img: 'path/to/image3.jpg'
  },
  // Add more participants as needed
];

const useStyles = createUseStyles({
  sliderContainer: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 20px',
    position: 'relative',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  navControls: {
    display: 'flex',
    alignItems: 'center',
  },
  customNav: {
    cursor: 'pointer',
    fontSize: 20,
    marginLeft: 10,
  },
  counter: {
    fontSize: 16,
  },
  slickDots: {
    bottom: -30,
  },
});

const ParticipantSlider: React.FC = () => {
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider, setSlider] = useState<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current: number) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className={classes.slickDots}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className={classes.sliderContainer}>
      <div className={classes.header}>
        <h2>Участники турнира</h2>
        <div className={classes.navControls}>
          <span className={classes.counter}>
            {currentSlide + 1} / {participants.length}
          </span>
          <LeftOutlined
            className={classes.customNav}
            onClick={() => slider?.slickPrev()}
          />
          <RightOutlined
            className={classes.customNav}
            onClick={() => slider?.slickNext()}
          />
        </div>
      </div>
      <Slider ref={setSlider} {...settings}>
        {participants.map((participant) => (
          <div key={participant.name}>
            <ParticipantCard
              name={participant.name}
              title={participant.title}
              img={participant.img}
              background={cardBackground}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ParticipantSlider;
