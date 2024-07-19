import  { useMemo } from 'react';
import classNames from 'classnames';
import { Logo } from '../../../../../assets/images/icons/logo';
import ChessHeader from '../../../../../pages/home/components/chess-header/chess-header.component';
import { useHeaderStyles } from './header.style';

const HeaderComponent = () => {
  const classes = useHeaderStyles();

  const headerClasses = useMemo(
    () =>
      classNames({
        [classes.header]: true,
       }),
    [classes.header,]
  );

  return (
    <div className={headerClasses}>
        <div className={classes.logo}>
          <Logo />
        </div>
      <ChessHeader />
    </div>
  );
};

export default HeaderComponent;
