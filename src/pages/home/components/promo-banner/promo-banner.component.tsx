import promoImage from '../../../../assets/images//statics/promoImage.png'; 
import { usePromoBannerStyles } from './promo-banner.style';

const PromoBanner = () => {
    const classes = usePromoBannerStyles();
  
    return (
      <div className={classes.bannerContainer}>
        <div className={classes.textContainer}>
          <div className={classes.heading}>
            Чтобы поддержать международный Васюкинский турнир посетите лекцию на тему:
          </div>
          <div className={classes.subHeading}>
            «Плодотворная дебютная идея»
          </div>
        </div>
        <img src={promoImage} alt='Chess Tournament' className={classes.image} />
      </div>
    );
  };
  
  export default PromoBanner;
  