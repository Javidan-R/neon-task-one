import {createBrowserRouter} from 'react-router-dom';

import {Routes} from './routes';
import AuthProtectedComponent from './protected/auth-protected.component';
import PublicComponent from '../core/layouts/public/public.component';
import HomeComponent from '../pages/home/home.component';
import NotFound from '../pages/not-found/notfound.component';



const router = createBrowserRouter([
    {
        element: <AuthProtectedComponent layout='public'><PublicComponent/></AuthProtectedComponent>,
        children: [
            {
                path: Routes.home,
                element: <HomeComponent/>,
            },
        
        ],
    },

    {
        path: '*',
        element: <NotFound/>,
    }
], {basename: '/',});

export default router;
