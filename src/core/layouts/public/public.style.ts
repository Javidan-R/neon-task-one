import {createUseStyles} from 'react-jss';
import { rem } from '../../../assets/styles/abstracts/functions';
import { transition } from '../../../assets/styles/abstracts/mixins';
import sizes from '../../../assets/styles/abstracts/sizes';

const styles = {
    public: {},
    content: {
        marginLeft: rem(sizes.leftMenu),
        minHeight: 'calc(100vh - 50px) !important',
        padding: `${rem(110)} ${rem(20)} 0`, 
        transition: transition(),
    },
    active: {marginLeft: 0,},
    containerSm: {
        maxWidth:rem(1240),
    }
};


export const usePublicLayoutStyles = createUseStyles(styles);
