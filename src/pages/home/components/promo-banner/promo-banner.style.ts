// src/components/promo-banner.style.ts
import { createUseStyles, Styles } from 'react-jss';
import { rem } from '../../../../assets/styles/abstracts/functions';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';

const styles: Styles = {
  bannerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: rem(50),
    paddingTop: '150px',
    gap: rem(20),
    [breakpoint(1024)]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  textContainer: {
    flex: 1,
    marginRight: rem(20),
    [breakpoint(1024)]: {
      marginRight: 0,
      textAlign: 'center',
    },
  },
  heading: {
    fontFamily: 'Merriweather',
    fontSize: rem(36),
    marginBottom: rem(10),
    width: '94%',
    [breakpoint(768)]: {
      fontSize: rem(28),
    },
    [breakpoint(480)]: {
      fontSize: rem(24),
    },
  },
  subHeading: {
    fontFamily: 'Merriweather',
    fontSize: rem(36),
    fontWeight: '500',
    color: '#FF0000',
    [breakpoint(768)]: {
      fontSize: rem(28),
    },
    [breakpoint(480)]: {
      fontSize: rem(24),
    },
  },
  image: {
    width: rem(394),
    height: rem(250),
    borderRadius: '50%',
    [breakpoint(1024)]: {
      width: rem(300),
      height: rem(200),
    },
    [breakpoint(768)]: {
      width: rem(250),
      height: rem(150),
    },
    [breakpoint(480)]: {
      width: rem(200),
      height: rem(100),
    },
  },
};

export const usePromoBannerStyles = createUseStyles(styles);
