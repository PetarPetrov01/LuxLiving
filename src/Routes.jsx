import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { Details } from './components/Details/Details';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

import { Create } from './components/Create/Create';
import { Profile } from './components/Profile/Profile';
import { OwnerGuard } from './components/RouteGuards/OwnerGuard';
import { Edit } from './components/Edit/Edit';


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

export const userRoutes = [
    {
        path: '/create',
        element: () => <Create />
    },
    {
        path: '/profile',
        element: () => <Profile />
    },
    {
        path: '/logout',
        element: () => <Home />
    },
    {
        path: '/catalog/:id/edit',
        element: () => <OwnerGuard>
            <Edit />
        </OwnerGuard>
    }
];







