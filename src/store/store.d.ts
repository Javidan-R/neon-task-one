import { ILang } from '../assets/lang/lang';

export interface IState {
  loader: boolean;
  leftMenu: boolean;
  languages: ILanguages[];
  locale: any;
  user: any | null;
  contact: IContact | null;
  steps: IStep[];
}

export interface ILanguages {
  id: number;
  key: ILang;
  value: string;
}

export interface IStep {
  id: number;
  number: number;
  text: string;
}

interface IContact {
  record: {
    callcenter: string;
    email: string;
    location: string;
    phone: string;
  };
  metadata: {
    id: string;
    private: boolean;
    createdAt: string;
    collectionId: string;
    name: string;
  };
}
