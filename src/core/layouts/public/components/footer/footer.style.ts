import { Styles, createUseStyles } from 'react-jss';
import colors from '../../../../../assets/styles/abstracts/color';
import { rem } from '../../../../../assets/styles/abstracts/functions';
import { breakpoint } from '../../../../../assets/styles/abstracts/mixins';
import sizes from '../../../../../assets/styles/abstracts/sizes';

const styles: Styles = {
  footerContainer: {
    marginTop: rem(150),
    width: sizes.full,
    [breakpoint(390)]: {
      marginTop: rem(90),
    },
  },
  footer: {
    backgroundColor: colors.footerBg,
    bottom: rem(0),
    right: rem(0),
    left: rem(0),
    fontSize: rem(16),
    lineHeight:rem(19.2)
  },
  footerSm: {
    fontSize: rem(17),
    maxWidth: rem(1366),
    maxHeight:rem(150),
    margin: '0 auto',
    padding: '30px 60px 50px 60px',
    [breakpoint(768)]: {
      display: 'flex',
      justifyContent: 'center',
    },
    [breakpoint(992)]: {
      '& .ant-col': {
        '& .ant-flex': {
          alignItems: 'center',
        },
      },
    },
  },
};

export const useFooterStyles = createUseStyles(styles);
