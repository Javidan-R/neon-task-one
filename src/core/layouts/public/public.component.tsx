import HeaderComponent from './components/header/header.component';
import {usePublicLayoutStyles} from './public.style';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames';
import { useMemo } from 'react';
import FooterComponent from './components/footer/footer.component';

const PublicComponent = () => {
    const classes = usePublicLayoutStyles();
    const containerClass = useMemo(() => (
        classNames({
            container:true,
            [classes.public]:true
        })
    ), [classes.public]);


    return (
        <div >
            <HeaderComponent/>
            <div className={containerClass}>
                <Outlet/>
            </div>
            <FooterComponent/>
        </div>
    );
};


export default PublicComponent;

