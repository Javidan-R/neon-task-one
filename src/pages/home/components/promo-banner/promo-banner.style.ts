import { createUseStyles, Styles } from 'react-jss';
import { rem } from '../../../../assets/styles/abstracts/functions';

const styles: Styles = {
  bannerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF8E1',
    border: '1px solid #FFD700',
    padding: rem(20),
    margin: rem(10),
  },
  textContainer: {
    flex: 1,
    marginRight: rem(20),
  },
  heading: {
    fontFamily: 'Merriweather',
    fontSize: rem(24),
    fontWeight: 'bold',
    marginBottom: rem(10),
  },
  subHeading: {
    fontFamily: 'Merriweather',
    fontSize: rem(20),
    color: '#FF0000',
  },
  image: {
    width: rem(200),
    height: rem(200),
    borderRadius: '50%',
  },
};

export const usePromoBannerStyles = createUseStyles(styles);
