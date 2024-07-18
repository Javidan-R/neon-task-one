import { createUseStyles, Styles } from 'react-jss';
import { rem } from '../../../../assets/styles/abstracts/functions';

const styles: Styles = {
  sliderContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: rem(60),
    backgroundColor: '#FF0000',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: '6px',
    boxSizing: 'border-box',
    margin: '0 10px',
  },
  carouselContainer: {
    width: '100%',
    overflowX: 'hidden',
  },
  slider: {
    display: 'flex',
    alignItems: 'center',
  },
  sliderContent: {
    display: 'flex',
    alignItems: 'center',
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
    margin: '0 10px',
  },
};

export const useTextSliderStyles = createUseStyles(styles);
