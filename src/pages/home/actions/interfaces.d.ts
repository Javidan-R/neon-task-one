export interface Event {
  date: string;
  location: string;
  ticketPrice: string;
  gameFee: string;
  orgPrice: string;
  telegramFee: string;
  adminContact: string;
}
export interface Participant {
  name: string;
  title: string;
  img: string;
}
export interface Promo {
  heading: string;
  subHeading: string;
}
export interface Step {
  number: number;
  text: string;
}
export interface Text {
  content: string;
}
