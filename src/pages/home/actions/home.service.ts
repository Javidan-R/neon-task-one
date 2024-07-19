import axios from 'axios';
import { Event, Participant, Promo, Step, Text } from './interfaces';

const API_URL = 'http://localhost:5000/'; // Update the path accordingly

export const fetchEvents = async (): Promise<Event[]> => {
  const { data } = await axios.get(`${API_URL}/events`);
  return data;
};

export const fetchParticipants = async (): Promise<Participant[]> => {
  const { data } = await axios.get(`${API_URL}/participants`);
  return data;
};

export const fetchPromo = async (): Promise<Promo> => {
  const { data } = await axios.get(`${API_URL}/promo`);
  return data;
};

export const fetchSteps = async (): Promise<Step[]> => {
  const { data } = await axios.get(`${API_URL}/steps`);
  return data;
};

export const fetchText = async (): Promise<Text[]> => {
  const { data } = await axios.get(`${API_URL}/text`);
  return data;
};
