import promoImage from '../../../../assets/images//statics/promoImage.png'; 
import { usePromoBannerStyles } from './promo-banner.style';
 
const promoText = {
  heading: 'Чтобы поддержать международный Васюкинский турнир посетите лекцию на тему:',
  subHeading: '«Плодотворная дебютная идея»'
};

const PromoBanner = () =>{
    const classes = usePromoBannerStyles();
  
    return (
      <div className={classes.bannerContainer}>
        <div className={classes.textContainer}>
          <div className={classes.heading}>
            {promoText.heading.toUpperCase()}
          </div>
          <div className={classes.subHeading}>
            {promoText.subHeading.toUpperCase()}
          </div>
        </div>
        <img src={promoImage} alt='Chess Tournament' className={classes.image} />
      </div>
    );
  };
  
  export default PromoBanner;
  