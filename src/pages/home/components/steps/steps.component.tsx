import React, { useMemo } from 'react';
import { useStyles } from './steps.style';
import imageSrc from '../../../../assets/images/statics/str.png';
const StepsComponent: React.FC = () => {
  const classes = useStyles();

  // Memoize the classes object
  const memoizedClasses = useMemo(() => ({
    container: classes.container,
    header: classes.header,
    subHeader: classes.subHeader,
    stepsGrid: classes.stepsGrid,
    stepCard: classes.stepCard,
    stepNumberContainer: classes.stepNumberContainer,
    stepNumber: classes.stepNumber,
    stepText: classes.stepText,
    tallCard: classes.tallCard,
    wideCard: classes.wideCard,
    imageContainer: classes.imageContainer,
    image: classes.image,
  }), [classes]);

  const stepsData = [
    { number: 1, text: 'Строительство железнодорожной магистрали Москва-Васюки' },
    { number: 2, text: 'Открытие фешенебельной гостиницы «Проходная пешка» и других небоскребов' },
    { number: 3, text: 'Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет' },
    { number: 4, text: 'Строительство дворца для турнира' },
    { number: 5, text: 'Размещение гаражей для гостевого автотранспорта' },
    { number: 6, text: 'Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов' },
    { number: 7, text: 'Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолетов и дирижаблей во все концы света, включая Лос-Анджелес и Мельбурн' },
  ];

  return (
    <div className={memoizedClasses.container}>
      <div className={memoizedClasses.header}>ЭТАПЫ ПРЕОБРАЖЕНИЯ ВАСЮКОВ</div>
      <div className={memoizedClasses.subHeader}>Будущие источники обогащения васюкинцев</div>
      <div className={memoizedClasses.stepsGrid}>
        {stepsData.map((step, index) => (
          <div
            key={index}
            className={`${memoizedClasses.stepCard} ${step.number === 3 ? memoizedClasses.tallCard : ''} ${step.number === 7 ? memoizedClasses.wideCard : ''}`}
          >
            <div className={memoizedClasses.stepNumberContainer}>
              <div className={memoizedClasses.stepNumber}>{step.number}</div>
            </div>
            <div className={memoizedClasses.stepText}>{step.text}</div>
          </div>
        ))}
      </div>
      <div className={memoizedClasses.imageContainer}>
        <img src={imageSrc} alt='Аэропорт' className={memoizedClasses.image} />
      </div>
    </div>
  );
};

export default StepsComponent;
