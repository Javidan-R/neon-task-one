// import {
//   Breadcrumb,
//   Card,
//   Checkbox,
//   Col,
//   Flex,
//   Input,
//   Slider,
//   Typography,
// } from 'antd';
// import classNames from 'classnames';
// import { useState, useCallback, useMemo } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, ArrowDown } from '../../assets/images/icons/arrows';
// import { HomeIcon } from '../../assets/images/icons/home';
// import { PlayButtonIcon } from '../../assets/images/icons/play-button';
// import useLocalization from '../../assets/lang';
// import ButtonComponent from '../../core/shared/button/button.component';
// import { useVideo } from './actions/home.query';
// import { useHomePageStyles } from './home.style';
// import { Routes } from '../../router/routes';

import ParticipantSlider from './components/card/card-slider.component';
import ChessEventPoster from './components/chess-event/chess-event.component';
import PromoBanner from './components/promo-banner/promo-banner.component';
import StepsComponent from './components/steps/steps.component';
import TextSlider from './components/text-slider/text-slider.component';

function HomeComponent() {
  // const translate = useLocalization();
  // const classes = useHomePageStyles();
  // const [isVideoStarted, setIsVideoStarted] = useState<boolean>(false);

  // const startVideoHandler = useCallback(() => {
  //   setIsVideoStarted(!isVideoStarted);
  // }, [isVideoStarted]);

  // const breadCrumbItems = useMemo(
  //   () => [
  //     {
  //       title: <HomeIcon />,
  //     },
  //     {
  //       title: <Link to={Routes.home}>{translate('home')}</Link>,
  //       path: Routes.home,
  //     },
  //   ],
  //   [translate]
  // );
  // const containerClass = useMemo(
  //   () =>
  //     classNames({
  //       container: true,
  //       [classes.containerSm]: true,
  //     }),
  //   [classes.containerSm]
  // );

  // const [loanAmount, setLoanAmount] = useState(0);
  // const [loanDuration, setLoanDuration] = useState(0);
  // const [loanInterest, setInterest] = useState(0);

  // const { data: video } = useVideo();
  // const { data: leads } = useLeads();
  // const calculatorLeads = useMemo(
  //   () => leads?.find((el: { id: number; }) => el.id === 4),
  //   [leads]
  // );

  return (
    <>
    <TextSlider/>
    <PromoBanner/>
    <ChessEventPoster
        imageSrc='/path/to/image.png'
        title='И СЕАНС ОДНОВРЕМЕННОЙ ИГРЫ В ШАХМАТЫ НА 160 ДОСКАХ ГРОССМЕЙСТЕРА О. БЕНДЕРА'
        date='22 июня 1927 г. в 18:00'
        location='Клуб «Картонжник»'
        ticketPrice='20 коп.'
        gameFee='50 коп.'
        telegramFee='21 руб. 16 коп.'
        adminContact='К. Михельсону'
      />
      <StepsComponent/>
            <ParticipantSlider />

    </>
  );
}

export default HomeComponent;

