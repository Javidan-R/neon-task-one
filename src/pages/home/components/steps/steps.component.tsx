import { Card, Row, Col } from 'antd';
import { useStyles } from './steps.style';

const StepsComponent: React.FC = () => {
    const classes = useStyles();
    const stepsData = [
        { number: 1, text: 'Строительство железнодорожной магистрали Москва-Васюки' },
        { number: 2, text: 'Открытие фешенебельной гостиницы «Проходная пешка» и других небоскребов' },
        { number: 3, text: 'Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет' },
        { number: 4, text: 'Строительство дворца для турнира' },
        { number: 5, text: 'Размещение гаражей для гостевого автотранспорта' },
        { number: 6, text: 'Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов' },
        { number: 7, text: 'Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолетов и дирижаблей во все концы света, включая Лос-Анджелес и Мельбурн' }
      ];
    return (
      <Card className={classes.container}>
        <div className={classes.header}>ЭТАПЫ ПРЕОБРАЖЕНИЯ ВАСЮКОВ</div>
        <div className={classes.subHeader}>Будущие источники обогащения васюкинцев</div>
        <Row gutter={[16, 16]}>
          {stepsData.map(step => (
            <Col key={step.number} xs={24} sm={12} md={8}>
              <Card className={classes.stepCard}>
                <div className={classes.stepNumber}>{step.number}</div>
                <div className={classes.stepText}>{step.text}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    );
  };
  
  export default StepsComponent;