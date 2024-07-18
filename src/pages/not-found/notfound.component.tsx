import {Link} from 'react-router-dom';
import { Routes } from '../../router/routes';

const NotfoundComponent = () => {
    return (
        <>
            <div
                className='error-page'
                style={{
                    backgroundImage: `url("${''}")`,
                }}
            >
                <div className='container-fluid error-content'>
                    <div className=''>
                        <h1 className='error-content__number'>404</h1>
                        <p className='error-content__mini-text mb-0 mt-0'>Ooops!</p>
                        <p className='error-content__error-text'>
                            The page you requested was not found!
                        </p>
                        <Link to={Routes.default} className='btn btn--primary'>
                            Go Back
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotfoundComponent;
