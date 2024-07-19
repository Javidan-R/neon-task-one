import React, { useMemo } from 'react';
import { useStyles } from './chess.event.style';
import eventback from '../../../../assets/images/statics/eventback.png';
import hand from '../../../../assets/images/statics/hand.png';
import blackHourse from '../../../../assets/images/statics/black-hourse.png';
import bottomvector from '../../../../assets/images/statics/bottomvector.png';
import topvector from '../../../../assets/images/statics/topvector.png';
import man from '../../../../assets/images/statics/man.png';
import rubl from '../../../../assets/images/statics/10.png';

interface ChessEventPosterProps {
  date: string;
  location: string;
  ticketPrice: string;
  orgPrice: string;
  gameFee: string;
  telegramFee: string;
  adminContact: string;
}

const ChessEventPoster: React.FC<ChessEventPosterProps> = ({
  date,
  location,
  ticketPrice,
  orgPrice,
  gameFee,
  telegramFee,
  adminContact,
}) => {
  const classes = useStyles();

  const memoizedClasses = useMemo(
    () => ({
      container: classes.container,
      rightImages: classes.rightImages,
      eventback: classes.eventback,
      topvector: classes.topvector,
      rubl: classes.rubl,
      man: classes.man,
      blackHourse: classes.blackHourse,
      bottomvector: classes.bottomvector,
      hand: classes.hand,
      content: classes.content,
      header: classes.header,
      highlightedText: classes.highlightedText,
      table: classes.table,
      textTd: classes.textTd,
      orgPrice: classes.orgPrice,
      text: classes.text,
    }),
    [classes]
  );

  return (
    <div style={{padding:'20px 50px'}}>
      <div className={memoizedClasses.container}>
        <div className={memoizedClasses.rightImages}>
          <img src={eventback} alt='Event Background' className={memoizedClasses.eventback} />
          <img src={topvector} alt='Top Vector' className={memoizedClasses.topvector} />
          <img src={rubl} alt='Rubl' className={memoizedClasses.rubl} />
          <img src={man} alt='Man' className={memoizedClasses.man} />
          <img src={bottomvector} alt='Bottom Vector' className={memoizedClasses.bottomvector} />
          <img src={blackHourse} alt='Black Hourse' className={memoizedClasses.blackHourse} />
          <img src={hand} alt='Hand' className={memoizedClasses.hand} />
        </div>

        <div className={memoizedClasses.content}>
          <div className={memoizedClasses.header}>
            И СЕАНС <span className={memoizedClasses.highlightedText}>ОДНОВРЕМЕННОЙ ИГРЫ В ШАХМАТЫ НА 160 ДОСКАХ </span> ГРОССМЕЙСТЕРА О. БЕНДЕРА
          </div>
          <table className={memoizedClasses.table}>
            <tbody>
              <tr>
                <td style={{ borderTop: 'none' }}>Место проведения:</td>
                <td style={{ borderTop: 'none' }} className={memoizedClasses.textTd}>{location}</td>
              </tr>
              <tr>
                <td>Дата и время мероприятия:</td>
                <td className={memoizedClasses.textTd}>{date}</td>
              </tr>
              <tr>
                <td>Стоимость входных билетов:</td>
                <td className={memoizedClasses.textTd}>{ticketPrice}</td>
              </tr>
              <tr>
                <td>Плата за игру:</td>
                <td className={memoizedClasses.textTd}>{gameFee} коп.</td>
              </tr>
              <tr>
                <td>Взнос на телеграммы:</td>
                <td className={memoizedClasses.textTd}><span className={memoizedClasses.orgPrice}>{orgPrice}руб.</span> {telegramFee}</td>
              </tr>
            </tbody>
          </table>
          <div className={memoizedClasses.text}>
            По всем вопросам обращаться в администрацию к {adminContact}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChessEventPoster;
