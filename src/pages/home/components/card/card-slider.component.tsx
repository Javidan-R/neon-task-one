import React, { useState, useMemo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import cardBackground from '../../../../assets/images/statics/cardBack.png';
import cardImage from '../../../../assets/images/statics/Group 16.png';
import ParticipantCard from './card.component';
import { useStyles } from './card.style';

const participants = [
  {
    name: 'Хозе-Рауль Капабланка',
    title: 'Чемпион мира по шахматам',
    img: cardImage
  },
  {
    name: 'Эммануил Ласкер',
    title: 'Чемпион мира по шахматам',
    img: cardImage
  },
  {
    name: 'Александр Алехин',
    title: 'Чемпион мира по шахматам',
    img: cardImage
  },
];

const ParticipantSlider: React.FC = () => {
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider, setSlider] = useState<Slider | null>(null);

  const settings = {
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

  const memoizedClasses = useMemo(
    () => ({
      sliderContainer: classes.sliderContainer,
      header: classes.header,
      headerContent: classes.headerContent,
      navControls: classes.navControls,
      customNav: classes.customNav,
      counter: classes.counter,
      slickDots: classes.slickDots,
    }),
    [classes]
  );

  return (
    <div className={memoizedClasses.sliderContainer}>
      <div className={memoizedClasses.header}>
        <h2 className={memoizedClasses.headerContent}>Участники турнира</h2>
        <div className={memoizedClasses.navControls}>    
          <LeftOutlined
            className={memoizedClasses.customNav}
            onClick={() => slider?.slickPrev()}
          />
          <span className={memoizedClasses.counter}>
            {currentSlide + 1} / {participants.length}
          </span>
          <RightOutlined
            className={memoizedClasses.customNav}
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
