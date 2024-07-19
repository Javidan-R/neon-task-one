import { createUseStyles, Styles } from 'react-jss';
import { rem } from '../../../../../assets/styles/abstracts/functions';
import { breakpoint } from '../../../../../assets/styles/abstracts/mixins';
import backImage from '../../../../../assets/images/statics/image 23.png';

const styles: Styles = {
  header: {
    position: 'relative', 
    height: rem(700),
    width: '100%',
    overflow: 'hidden', 
    backgroundImage: `url(${backImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#e1d1c4',
    backgroundBlendMode: 'overlay', 
    [breakpoint(1200)]: {
      height: rem(500),
    },
    [breakpoint(768)]: {
      height: rem(450),
    },
  },
  logo: {
    display: 'block',
    position: 'relative',
    width: rem(245),
    height: rem(36),
    top: rem(20),
    left: rem(50),
    cursor: 'pointer',
    zIndex: 1, 
  },
};

export const useHeaderStyles = createUseStyles(styles);
