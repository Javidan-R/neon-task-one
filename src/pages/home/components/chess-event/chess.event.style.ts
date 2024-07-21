import { createUseStyles } from 'react-jss';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';
import { rem } from '../../../../assets/styles/abstracts/functions';

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: rem(40),
    textAlign: 'center',
    [breakpoint(1024)]: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      textAlign: 'left',
    },
  },
  rightImages: {
    position: 'relative',
    width: '100%',
    height: rem(400),
    [breakpoint(1024)]: {
      width: '100%',
      height: rem(300),
    },
  },
  eventback: {
    position: 'absolute',
    width: rem(437),
    height: rem(405),
    objectFit: 'cover',
    left: '0',
    [breakpoint(1024)]: {
      width: rem(330),
      height: rem(300),
      top: rem(20),
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },
  topvector: {
    position: 'absolute',
    bottom: '30%',
    left: '-7%',
    width: rem(500),
    height: rem(343),
    [breakpoint(1024)]: {
      bottom: '10%',
      left: '10%',
      width: rem(400),
      height: rem(300),
    },
  },
  rubl: {
    position: 'absolute',
    top: '-7%',
    right: '-2%',
    width: rem(121),
    height: rem(240),
    [breakpoint(1024)]: {
      top: rem(0),
      right: '20%',
      width: rem(100),
      height: rem(200),
    },
  },
  man: {
    position: 'absolute',
    top: rem(30),
    right: rem(100),
    width: rem(325),
    height: rem(331),
    [breakpoint(1024)]: {
      top: rem(60),
      right: '50%',
      transform: 'translateX(50%)',
      width: rem(300),
      height: rem(270),
    },
  },
  blackHourse: {
    position: 'absolute',
    bottom: rem(-50),
    left: rem(50),
    width: rem(100),
    height: rem(148.92),
    [breakpoint(1024)]: {
      bottom: rem(-30),
      left: '30%',
      transform: 'translateX(-50%)',
      width: rem(80),
      height: rem(120),
    },
  },
  bottomvector: {
    position: 'absolute',
    bottom: rem(-80),
    left: rem(-20),
    width: rem(213.6),
    height: rem(245),
    [breakpoint(1024)]: {
      bottom: rem(-60),
      left: '30%',
      transform: 'translateX(-50%)',
      width: rem(200),
      height: rem(200),
    },
  },
  hand: {
    position: 'absolute',
    bottom: rem(-110),
    right: rem(80),
    width: rem(200.32),
    height: rem(235),
    [breakpoint(1024)]: {
      bottom: rem(-90),
      right: '30%',
      transform: 'translateX(50%)',
      width: rem(180),
      height: rem(210),
    },
  },
  content: {
    marginTop: '20px',
    [breakpoint(1024)]: {
      marginTop: '50px',
      marginLeft: '20px',
      width: '100%',
    },
  },
  header: {
    fontSize: rem(36),
    color: '#000',
    fontFamily: 'Merriweather',
    fontWeight: '700',
    width: '95%',
    textAlign: 'left',
    lineHeight: rem(49),
    [breakpoint(1024)]: {
      width: '90%',
      lineHeight: rem(40),
    },
    [breakpoint(768)]: {
      width: '85%',
      fontSize: rem(30),
      lineHeight: rem(40),
    },
    [breakpoint(350)]: {
      width: '80%',
      fontSize: rem(25),
      lineHeight: rem(20),
    },
  },
  orgPrice: {
    textDecoration: 'line-through',
    textDecorationColor: 'red',
    fontWeight: 'bold',
  },
  highlightedText: {
    color: 'red',
    fontWeight: 'bold',
  },
  textTd: {
    fontWeight: '600',
  },
  text: {
    color: '#3057A2',
    fontSize: rem(17),
    textAlign: 'left',
    lineHeight: rem(24),
    margin: '30px 5px',
  },
  table: {
    marginTop: '10px',
    borderCollapse: 'collapse',
    width: '100%',
    '& tbody': {
      '& td, & th': {
        padding: '5px',
        textAlign: 'left',
        border: '1px solid',
        fontSize: rem(20),
        fontFamily: 'Golos Text',
        color: '#313131',
      },
    },
    '& tr': {
      '& td:first-child, & th:first-child': {
        borderLeft: 'none',
        borderBottom: 'none',
      },
      '& td:last-child, & th:last-child': {
        borderRight: 'none',
        borderBottom: 'none',
      },
    },
    [breakpoint(480)]: {
      fontSize: '14px',
    },
    [breakpoint(320)]: {
      fontSize: '12px',
    },
  },
});
