import { createUseStyles, Styles } from 'react-jss';
import { rem } from '../../../../assets/styles/abstracts/functions';

const styles: Styles = {
  carouselContainer: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 4,
    height: '60px !important',
  },
  slider: {
    display: 'flex',
    alignItems: 'center',
    '& .slick-slide': {
      width: 'auto !important',
    },

  },
  sliderItem: {
    display: 'flex !important',
    alignItems: 'center',
    justifyContent: 'center',
    height: rem(60) + '!important',
    backgroundColor: '#FF0000',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: '6px',
    boxSizing: 'border-box',
    margin: '0 10px',
    flex: '0 0 auto',
    minWidth: '0',
    marginBottom: 0,
  },
  sliderContent: {
    display: 'inline-block',
    fontFamily: 'Merriweather',
    fontSize: rem(20),
    lineHeight: rem(24),
    whiteSpace: 'nowrap',
    padding: '0 10px',
  },
  dot: {
    display: 'inline-block',
    width: rem(8),
    height: rem(8),
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    marginRight: rem(10),
  },
};

export const useTextSliderStyles = createUseStyles(styles);
