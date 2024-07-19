import { createUseStyles } from 'react-jss';
import { rem } from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';

export const useStyles = createUseStyles({
  top: {
    backgroundColor: 'transparent',
    textAlign: 'left',
    width: rem(542),
    height: rem(264),
    [breakpoint(1200)]: {
      width: '90%',
      height: 'auto',
    },
    [breakpoint(768)]: {
      width: '95%',
      height: 'auto',
    },
    [breakpoint(576)]: {
      width: '100%',
      height: 'auto',
    },
  },
  title: {
    color: colors.textMain,
    marginTop: rem(60),
    fontSize: rem(60),
    textTransform: 'uppercase',
    textAlign: 'left',
    [breakpoint(1200)]: {
      fontSize: rem(50),
      lineHeight: rem(55),
    },
    [breakpoint(768)]: {
      fontSize: rem(40),
      lineHeight: rem(50),
    },
    [breakpoint(576)]: {
      fontSize: rem(35),
      lineHeight: rem(40),
    },
    [breakpoint(480)]: {
      fontSize: rem(30),
      lineHeight: rem(35),
    },
  },
  desc: {
    color: colors.textMain,
    fontSize: rem(18),
    lineHeight: rem(23.4),
    fontFamily: 'Golos Text',
    textAlign: 'center',
    [breakpoint(1200)]: {
      fontSize: rem(16),
      lineHeight: rem(20),
    },
    [breakpoint(768)]: {
      fontSize: rem(14),
      lineHeight: rem(18),
    },
    [breakpoint(576)]: {
      fontSize: rem(12),
      lineHeight: rem(16),
    },
    [breakpoint(480)]: {
      fontSize: rem(10),
      lineHeight: rem(14),
    },
  },
  buttonGroup: {
    position: 'relative',
    zIndex: '5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: rem(16),
    '& button': {
      width: rem(263),
      height: rem(72),
      [breakpoint(1200)]: {
        width: rem(220),
        height: rem(60),
      },
      [breakpoint(768)]: {
        width: rem(180),
        height: rem(50),
      },
      [breakpoint(576)]: {
        width: rem(150),
        height: rem(40),
      },
      [breakpoint(480)]: {
        width: rem(130),
        height: rem(35),
      },
    },
    [breakpoint(768)]: {
      flexDirection: 'column',
      gap: rem(10),
    },
  },
  imageGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  rightImages: {
    display: 'block',
    [breakpoint(1200)]: {
      display: 'none',
    },
    [breakpoint(768)]: {
      display: 'none',
    },
    [breakpoint(576)]: {
      display: 'none',
    },
    [breakpoint(480)]: {
      display: 'none',
    },
  },
  ellipseWrapper: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    bottom: rem(0),
    right: rem(30),
  },
  ellipse: {
    position: 'absolute',
    width: '89%',
    height: '91%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    margin: 'auto',
    zIndex: 1,
    top: rem(-40),
    left: rem(50),
    opacity:'.85'
  },
  circle: {
    position: 'relative',
    height: 'auto',
    zIndex: 1,
    top: rem(-40),
    left: rem(2),
  },
  city: {
    position: 'absolute',
    zIndex: '3',
    left: '0',
    top: '44%',
    width: '100%',
    height: 'auto',
    [breakpoint(1200)]: {
      width: rem(80),
    },
    [breakpoint(768)]: {
      width: rem(70),
    },
    [breakpoint(576)]: {
      width: rem(60),
    },
    [breakpoint(480)]: {
      width: rem(50),
    },
  },
  king: {
    position: 'absolute',
    top: '32%', // Adjust positioning as needed
    right: '12%', // Adjust positioning as needed
    width: rem(113.16),
    height: rem(252.44),
    zIndex: 1,
    [breakpoint(1200)]: {
      width: rem(40),
    },
    [breakpoint(768)]: {
      width: rem(35),
    },
    [breakpoint(576)]: {
      width: rem(30),
    },
    [breakpoint(480)]: {
      width: rem(25),
    },
  },
  minister: {
    position: 'absolute',
    top: '44%', // Adjust positioning as needed
    right: '37%', // Adjust positioning as needed
    width: rem(113.16),
    height: rem(252.44),
    zIndex: 1,
    [breakpoint(1200)]: {
      width: rem(40),
    },
    [breakpoint(768)]: {
      width: rem(35),
    },
    [breakpoint(576)]: {
      width: rem(30),
    },
    [breakpoint(480)]: {
      width: rem(25),
    },
  },
  soldier: {
    position: 'absolute',
    bottom: '0', // Adjust positioning as needed
    right: rem(10), // Adjust positioning as needed
    width: rem(82),
    height: rem(122.2),
    zIndex: 3,
    [breakpoint(1200)]: {
      width: rem(40),
    },
    [breakpoint(768)]: {
      width: rem(35),
    },
    [breakpoint(576)]: {
      width: rem(30),
    },
    [breakpoint(480)]: {
      width: rem(25),
    },
  },
  hourse: {
    position: 'absolute',
    bottom: '-4%',
    right: '25%',
    width: rem(170),
    height: rem(233),
    zIndex: 3,
    [breakpoint(1200)]: {
      width: rem(40),
    },
    [breakpoint(768)]: {
      width: rem(35),
    },
    [breakpoint(576)]: {
      width: rem(30),
    },
    [breakpoint(480)]: {
      width: rem(25),
    },
  },
});
