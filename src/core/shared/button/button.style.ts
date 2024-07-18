import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';

export const useCustomButtonstyle = createUseStyles({
  button: () => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: rem(8),
    cursor: 'pointer',
    fontSize: rem(15),
    transition: 'background-color 0.3s ease',
    outline: 'none',
  }),
  buttonContent: {
    display: 'inline-flex',
    alignItems: 'center',
    },
  primary: {
    backgroundColor: colors.greenMain,
    color: colors.white,
    padding: rem(10)+' '+rem(20),
    marginRight: rem(16),
    border: `2px solid ${colors.greenMain}`,
    height: rem(49),
    '&:hover': {
      backgroundColor: colors.greenMain + '!important',
      color: colors.white  + '!important',
      border: `2px solid ${colors.greenMain}`,
    },
  },
  outline: {
    backgroundColor: colors.white,
    color: colors.greenMain,
    border: `2px solid ${colors.greenMain}`,
    width: rem(200),
    height: rem(48),

    padding: rem(10) +' '+rem(20),
    '&:hover': {
      backgroundColor: colors.greenMain,
      color: colors.white,
    },
  },
  iconRight: {
    marginLeft: rem(10),
  },
  iconDown: {
    marginTop: rem(10),
    marginLeft: rem(10),
  },
  iconUp: {
    width: rem(25),
    height: rem(25),
    marginTop: rem(4),
    marginLeft: rem(4),
  },
  iconPrimary: {
    '&:hover > *': {
      color:colors.greenMain
    }
  }
});
