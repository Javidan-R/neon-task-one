import { createUseStyles } from 'react-jss';
import { rem } from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';

export const useStyles = createUseStyles({
  // Slider
  sliderContainer: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 50px',
    position: 'relative',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    [breakpoint(768)]: {
      flexDirection: 'column',
    },
    [breakpoint(576)]: {
      flexDirection: 'column',
    },
    [breakpoint(450)]: {
      flexDirection: 'column',
    },
  },
  headerContent: {
    fontFamily: 'Merriweather',
    fontSize: rem(54),
    lineHeight: rem(64.8),
    textTransform: 'uppercase',
    [breakpoint(1200)]: {
      fontSize: rem(45),
      lineHeight: rem(54.8),
    },
    [breakpoint(768)]: {
      width:'100%',
           fontSize: rem(35),
      lineHeight: rem(44.8),
    },
    [breakpoint(576)]: {
      fontSize: rem(30),
      lineHeight: rem(40.8),
    },
  },
  navControls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: rem(15),
  },
  customNav: {
    cursor: 'pointer',
    fontSize: 20,
    marginLeft: 10,
    width: rem(44),
    height: rem(44),
    borderRadius: '50%',
    backgroundColor: colors.textMain,
    color: colors.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 16,
  },
  slickDots: {
    bottom: -30,
  },

  // Card
  card: {
    width: '100%',
    maxWidth: rem(394),
    height: rem(490),
    textAlign: 'center',
    margin: 'auto',
    borderRadius: rem(10),
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#fff',
  },
  cover: {
    borderRadius: '50%',
    width: rem(320),
    height: rem(320),
    margin: '20px auto',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  img: {
    borderRadius: '50%',
    width: '100%',
    height: '90%',
    objectFit: 'contain',
    position: 'absolute',
    top: 30,
    cursor: 'pointer',
  },
  meta: {},
  name: {
    height: rem(28),
    fontFamily: 'Golos Text',
    fontWeight: 600,
    fontSize: rem(22),
    color: colors.textMain,
  },
  title: {
    height: rem(22),
    fontFamily: 'Golos Text',
    fontWeight: 400,
    fontSize: rem(18),
    color: '#313131',
  },
  button: {
    cursor: 'pointer',
    color: colors.textSecond,
    backgroundColor: 'transparent',
    width: rem(113),
    height: rem(35),
    borderRadius: rem(62),
    padding: rem(8),
    gap: rem(10),
    border: '1px #3057A2 solid',
    fontFamily: 'Golos Text',
    fontWeight: 500,
    fontSize: rem(16),
    lineHeight: rem(19),
  },
});
