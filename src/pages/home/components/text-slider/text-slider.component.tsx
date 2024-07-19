import Slider from 'react-slick';
import { useTextSliderStyles } from './text-slider.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TextSlider = () => {
  const classes = useTextSliderStyles();

  const texts = [
    'Дело помощи утопающим — дело рук самих утопающих!',
    'Шахматы двигают вперёд не только культуру, но и экономику!',
    'Лёд тронулся, господа присяжные заседатели!',
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
  };

  return (
    <div className={classes.carouselContainer}>
      <Slider {...settings} className={classes.slider}>
        {texts.map((text, index) => (
          <div key={index} className={classes.sliderItem}>
            <span className={classes.dot}></span>
            <span className={classes.sliderContent}>{text.toUpperCase()}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TextSlider;
