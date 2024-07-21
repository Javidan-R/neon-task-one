import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IContact, IState} from './store';
import {az} from '../assets/lang/az';
import {en} from '../assets/lang/en';
import {ru} from '../assets/lang/ru';
import {environment} from '../core/configs/app.config';

const initialState: IState = {
    loader: false,
    leftMenu: true,
    languages: [
        { id: 1, key: 'az', value: 'Az' },
        { id: 2, key: 'en', value: 'En' },
        { id: 3, key: 'ru', value: 'Ru' }
    ],
    locale: az,
    user: null,
    contact: null
};

export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setLoader: (state, action: PayloadAction<boolean>) => {
            state.loader = action.payload;
        },
        toggleLeftMenu: (state) => {
            state.leftMenu = !state.leftMenu;
        },
        setLocale: (state, action: PayloadAction<'az' | 'en' | 'ru'>) => {
            const lang = { az, en, ru };
            state.locale = lang[action.payload];
            localStorage.setItem(`${environment.applicationName}-locale`, action.payload);
        },
        setUser: (state, action: PayloadAction<string | null>) => {
            state.user = action.payload;
        },
        setContact: (state, action: PayloadAction<IContact>) => {
            state.contact = action.payload;
        }
    },
});

export const {setLoader, toggleLeftMenu, setLocale, setUser, setContact} = rootSlice.actions;
export default rootSlice.reducer;