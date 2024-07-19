import React, { useMemo } from 'react';
import { Layout } from 'antd';
import circleImg from '../../../../assets/images/statics/Group.png';
import ellipseImg from '../../../../assets/images/statics/Ellipse 6.png';
import city from '../../../../assets/images/statics/city.svg';
import king from '../../../../assets/images/statics/king.png';
import hourse from '../../../../assets/images/statics/hourse.png';
import minister from '../../../../assets/images/statics/minister.png';
import soldier from '../../../../assets/images/statics/soldier.png';
import { useStyles } from './chess-header.style';
import ButtonComponent from '../../../../core/shared/button/button.component';

const { Header } = Layout;
const content = {
  title: 'Превратите уездный город в столицу земного шара',
  description: 'Оплатите взнос на телеграммы для организации Международного васюкинского турнира по шахматам',
  buttonPrimary: 'Поддержать шахматную мысль',
  buttonSecondary: 'Подробнее о турнире',
};

const ChessHeader: React.FC = () => {
  const classes = useStyles();

  const memoizedClasses = useMemo(
    () => ({
      header: classes.top,
      buttonGroup: classes.buttonGroup,
      rightImages: classes.rightImages,
      ellipseWrapper: classes.ellipseWrapper,
      ellipse: classes.ellipse,
      circle: classes.circle,
      city: classes.city,
      hourse: classes.hourse,
      soldier: classes.soldier,
      minister: classes.minister,
      king: classes.king,
      imageGroup: classes.imageGroup,
      title: classes.title,
      desc: classes.desc,
    }),
    [classes]
  );

  return (
    <>
      <div className={memoizedClasses.imageGroup}>
        <Header className={memoizedClasses.header}>
          <h1 className={memoizedClasses.title}>{content.title}</h1>
          <h3 className={memoizedClasses.desc}>{content.description}</h3>
          <div className={memoizedClasses.buttonGroup}>
            <ButtonComponent type='primary'>{content.buttonPrimary}</ButtonComponent>
            <ButtonComponent type='secondary'>{content.buttonSecondary}</ButtonComponent>
          </div>
        </Header>
        <div className={memoizedClasses.rightImages}>
          <div className={memoizedClasses.ellipseWrapper}>
            <img src={ellipseImg} alt='Ellipse Background' className={memoizedClasses.ellipse} />
            <img src={circleImg} alt='Circle' className={memoizedClasses.circle} />
          </div>
          <img src={city} alt='City' className={memoizedClasses.city} />
          <img src={hourse} alt='City' className={memoizedClasses.hourse} />
          <img src={soldier} alt='City' className={memoizedClasses.soldier} />
          <div>
            <img src={minister} alt='Chess Piece' className={memoizedClasses.minister} />
            <img src={king} alt='Chess Piece' className={memoizedClasses.king} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChessHeader;
