import ParticipantSlider from './components/card/card-slider.component';
import ChessEventPoster from './components/chess-event/chess-event.component';
import PromoBanner from './components/promo-banner/promo-banner.component';
import StepsComponent from './components/steps/steps.component';
import TextSlider from './components/text-slider/text-slider.component';

function HomeComponent() {
  return (
    <>
      <TextSlider />
      <PromoBanner />
      <ChessEventPoster
        date='22 июня 1927 г. в 18:00'
        location='Клуб «Картонжник»'
        ticketPrice='20 коп.'
        gameFee='50 '
        orgPrice='100'
        telegramFee='21 руб. 16 коп.'
        adminContact='К. Михельсону'
      />
      <StepsComponent />
      <ParticipantSlider />

    </>
  );
}

export default HomeComponent;

