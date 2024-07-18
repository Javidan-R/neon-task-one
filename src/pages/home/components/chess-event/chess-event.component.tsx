import { Card } from 'antd';
import { useStyles } from './chess.event.style';

const ChessEventPoster: React.FC<ChessEventPosterProps> = ({
    imageSrc,
    title,
    date,
    location,
    ticketPrice,
    gameFee,
    telegramFee,
    adminContact,
  }) => {
    const classes = useStyles();
  
    return (
      <Card>
        <div className={classes.container}>
          <img src={imageSrc} alt="Chess Event" className={classes.image} />
          <div className={classes.content}>
            <div className={classes.header}>{title}</div>
            <table className={classes.table}>
              <tbody>
                <tr>
                  <td>Место проведения:</td>
                  <td>{location}</td>
                </tr>
                <tr>
                  <td>Дата и время мероприятия:</td>
                  <td>{date}</td>
                </tr>
                <tr>
                  <td>Стоимость входных билетов:</td>
                  <td>{ticketPrice}</td>
                </tr>
                <tr>
                  <td>Плата за игру:</td>
                  <td>{gameFee}</td>
                </tr>
                <tr>
                  <td>Взнос на телеграммы:</td>
                  <td>{telegramFee}</td>
                </tr>
              </tbody>
            </table>
            <div className={classes.text}>
              По всем вопросам обращаться в администрацию к {adminContact}
            </div>
          </div>
        </div>
      </Card>
    );
  };
  
  export default ChessEventPoster;