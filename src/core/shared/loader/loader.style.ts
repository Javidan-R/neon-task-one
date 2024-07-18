import {createUseStyles} from 'react-jss';
import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';

const styles = {
    loader: {
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.fadedBg,
        backdropFilter: 'blur(3px)',
    },
    inner: {
        width: rem(48),
        height:  rem(48),
        background: colors.textMain,
        display: 'inline-block',
        borderRadius: '50%',
        boxSizing: 'border-box',
        animation: '$animloader 1.2s ease-in infinite',
    },
    '@keyframes animloader': {
        '0%': {
            transform: 'scale(0)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(1)',
            opacity: 0,
        },
    },
};

export const useLoaderStyles = createUseStyles(styles);
