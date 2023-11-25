import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { Details } from './components/Details/Details';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
export const publicRoutes = [
    {
        path: '/',
        element: () => < Home />
    },
    {
        path: '/catalog',
        element: () => < Catalog />
    },
    {
        path: '/catalog/:id/details',
        element: () => < Details />
    },
    {
        path: '/login',
        element: () => < Login />
    },
    {
        path: '/register',
        element: () => < Register />
    }
];
