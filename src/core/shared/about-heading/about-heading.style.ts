import { createUseStyles } from 'react-jss';
import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { breakpoint } from 'assets/styles/abstracts/mixins';

export const useAboutHeadingStyles = createUseStyles({
  content: {
    textAlign: 'center',
    lineHeight: 2,
    width: 'auto',
    padding: `${rem(10)} ${rem(0)}`,
  },
  heading: {
    color: colors.greenMain,
    fontWeight: 700,
    fontSize: rem(60),
    marginBottom: rem(10),
    maxWidth:rem(530),
    [breakpoint(768)]: {
      fontSize: rem(32),
      lineHeight: rem(42),
    },
    lineHeight: rem(80),
    textAlign: 'left',
  },

  buttons: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: rem(20),
    [breakpoint(375)]: {
     width:'80%'
    },
  },
  miniTitle: {
    color: colors.greenMain,
    fontSize: rem(16),
    lineHeight: rem(21),
    fontWeight: 600,
    textAlign: 'center',
  },
  title: {
    color: colors.textMain,
    fontSize: rem(36),
    lineHeight: rem(46),
    fontWeight: 600,
    width: '80%',
    textAlign: 'left',
    [breakpoint(768)]: {
      fontSize: rem(30),
      lineHeight: rem(26),
    },
    [breakpoint(390)]: {
            fontSize:rem(34),
            lineHeight:rem(37),
    }
  },
  desc: {
    color: colors.textMain,
    fontSize: rem(16),
    lineHeight: rem(22),
    textAlign: 'left',
    width: '100%',
    padding: `${rem(20)} ${rem(0)}`,
  },
  container: {
  }
});
