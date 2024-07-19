import { useQuery } from 'react-query';
import {
  fetchEvents,
  fetchParticipants,
  fetchPromo,
  fetchSteps,
  fetchText,
} from './home.service';
import { Event, Participant, Promo, Step, Text } from './interfaces';

export const useEvents = () => {
  return useQuery<Event[]>('events', fetchEvents);
};

export const useParticipants = () => {
  return useQuery<Participant[]>('participants', fetchParticipants);
};

export const usePromo = () => {
  return useQuery<Promo>('promo', fetchPromo);
};

export const useSteps = () => {
  return useQuery<Step[]>('steps', fetchSteps);
};

export const useText = () => {
  return useQuery<Text[]>('text', fetchText);
};
