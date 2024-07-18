import './header.style';
import { useHeaderStyles } from './header.style';
import { useCallback, useEffect, useMemo, useState } from 'react';

import classNames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { Col, Flex } from 'antd';
import useLocalization from '../../../../../assets/lang';
import { Routes } from '../../../../../router/routes';
import { Logo } from '../../../../../assets/images/icons/logo';


const HeaderComponent = () => {
  const classes = useHeaderStyles();
  const translate = useLocalization();
  const {pathname} = useLocation();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const openMenuHandler = useCallback(() => {
    setIsMenuOpened(!isMenuOpened);
  }, [isMenuOpened]);
  const navActivation = useCallback(
    ({ isActive }: { isActive: boolean }) =>
      classNames({
        [classes.activeNavEl]: isActive,
        [classes.NavEl]: !isActive,
      }),
    [classes.NavEl, classes.activeNavEl]
  );

  const navigations = useMemo(
    () => [
      {
        url: Routes.home,
        text: translate('homepage'),
      }
    ],
    [translate]
  );

  const headerClasses = useMemo(
    () =>
      classNames({
        [classes.containerSm]: true,
        [classes.header]:true,
        container: false,

      }),
    [classes.containerSm, classes.header]
  );

  // const menuBtnClasses = useMemo(
  //   () =>
  //     classNames({
  //       'd-block d-lg-none': true,
  //       [classes.menuBtn]: true,
  //     }),
  //   [classes.menuBtn]
  // );

  const menuClasses = useMemo(
    () =>
      classNames({
        [classes.menuOpen]: isMenuOpened,
        [classes.menu]: !isMenuOpened,
      }),
    [classes.menu, classes.menuOpen, isMenuOpened]
  );

  const overLayClasses: string = useMemo(
    () =>
      classNames({
        [classes.overlayOpen]: isMenuOpened,
        [classes.overlay]: !isMenuOpened,
      }),
    [classes.overlay, classes.overlayOpen, isMenuOpened]
  );

  useEffect(() => {
    setIsMenuOpened(false);
  }, [pathname]);
  return (
    <div className={headerClasses}>
      <div className=' py-49'>
        <Flex justify='space-between'>
          <Col className='col-6 p-0'>
            <Logo />
          </Col>
          <Flex
            align='center'
            justify='space-between'
            gap={40}
            className='col-6 p-0 gap-10 d-none d-lg-flex'
          >
            {navigations.map((nav, key) => {
              let isActiveRoute;

              return (
                <NavLink
                  to={nav.url}
                  key={key}
                  className={({ isActive }) => {
                    isActiveRoute = isActive;
                    return navActivation({ isActive });
                  }}
                >
                  {nav.text}
                  {isActiveRoute ? <Logo/> : ''}
                </NavLink>
              );
            })}
          </Flex>
          <span onClick={openMenuHandler}>
          </span>
        </Flex>
      </div>
      <div className={menuClasses}>
        <Flex
          align='center'
          vertical
          justify='space-between'
          gap={40}
          className={classes.innerMenu}
        >
          {navigations.map((nav, key) => (
            <NavLink to={nav.url} key={key} className={navActivation}>
              {nav.text}
            </NavLink>
          ))}
        </Flex>
      </div>
      <div className={overLayClasses} onClick={openMenuHandler}></div>
    </div>
  );
};

export default HeaderComponent;
