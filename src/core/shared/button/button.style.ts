import { createUseStyles } from 'react-jss';
import colors from '../../../assets/styles/abstracts/color';
import { rem } from '../../../assets/styles/abstracts/functions';
import {
  breakpoint,
  transition,
} from '../../../assets/styles/abstracts/mixins';

export const useCustomButtonstyle = createUseStyles({
  button: () => ({
    margin: '5px',
    border: '2px solid #000',
    borderRadius: rem(60),
    padding: rem(20),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    cursor: 'pointer',
    fontSize: rem(16),
    transition: transition('background-color'),
    outline: 'none',
    [breakpoint(1200)]: {
      padding: rem(15),
      fontSize: rem(14),
    },
    [breakpoint(992)]: {
      padding: rem(12),
      fontSize: rem(13),
    },
    [breakpoint(768)]: {
      padding: rem(10),
      fontSize: rem(12),
    },
    [breakpoint(576)]: {
      padding: rem(8),
      fontSize: rem(11),
    },
    [breakpoint(480)]: {
      padding: rem(6),
      fontSize: rem(10),
    },
  }),
  buttonContent: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  primary: {
    backgroundColor: colors.textMain,
    color: colors.white,
    padding: rem(10) + ' ' + rem(20),
    marginRight: rem(16),
    border: `2px solid ${colors.textMain}`,
    height: rem(49),
    [breakpoint(1200)]: {
      padding: rem(8) + ' ' + rem(16),
      height: rem(40),
    },
    [breakpoint(992)]: {
      padding: rem(7) + ' ' + rem(14),
      height: rem(38),
    },
    [breakpoint(768)]: {
      padding: rem(6) + ' ' + rem(12),
      height: rem(35),
    },
    [breakpoint(576)]: {
      padding: rem(5) + ' ' + rem(10),
      height: rem(32),
    },
    [breakpoint(480)]: {
      padding: rem(4) + ' ' + rem(8),
      height: rem(30),
    },
  },
  outline: {
    backgroundColor: 'transparent',
    color: colors.textMain,
    border: `2px solid ${colors.textMain}`,
    width: rem(200),
    height: rem(48),
    padding: rem(10) + ' ' + rem(20),
    [breakpoint(1200)]: {
      width: rem(180),
      height: rem(40),
      padding: rem(8) + ' ' + rem(16),
    },
    [breakpoint(992)]: {
      width: rem(170),
      height: rem(38),
      padding: rem(7) + ' ' + rem(14),
    },
    [breakpoint(768)]: {
      width: rem(160),
      height: rem(35),
      padding: rem(6) + ' ' + rem(12),
    },
    [breakpoint(576)]: {
      width: rem(150),
      height: rem(32),
      padding: rem(5) + ' ' + rem(10),
    },
    [breakpoint(480)]: {
      width: rem(140),
      height: rem(30),
      padding: rem(4) + ' ' + rem(8),
    },
    '&:hover': {
      backgroundColor: colors.textMain,
      color: colors.white,
      transition: transition('background-color'),
    },
  },
});
