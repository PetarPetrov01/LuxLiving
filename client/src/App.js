import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Catalog } from './components/Catalog/Catalog';
import { Register } from './components/Register/Register';
import { Home } from './components/Home/Home';
import { GlobalStyle } from './styles/GlobalStyles';
import { Create } from './components/Create/Create';
import { UserProvider } from './contexts/UserContext';
import { Details } from './components/Details/Details';
import { PropertyProvider } from './contexts/PropertyContext';
import { Edit } from './components/Edit/Edit';
import { Profile } from './components/Profile/Profile';
import { Footer } from './components/Footer/Footer';
import { UserGuard } from './components/RouteGuards/UserGuard';
import { OwnerGuard } from './components/RouteGuards/OwnerGuard';
import { NotFound } from './components/NotFound/NotFound';

function App() {
    return (
        <div className="App">
            <UserProvider>
                <PropertyProvider>
                    <GlobalStyle />
                    <Header />
                    <main>

                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/catalog' element={<Catalog />} />
                            <Route path='/catalog/:id/details' element={<Details />} />

                            <Route element={<UserGuard />}>
                                <Route path='/create' element={<Create />} />
                                <Route path='/profile' element={<Profile />} />
                                <Route path='/logout' element={<Home />} />

                                <Route element={<OwnerGuard />}>
                                    <Route path='/catalog/:id/edit' element={<Edit />} />
                                </Route>
                            </Route>

                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/*' element={<NotFound />} />
                        </Routes>
                    </main>

                    <Footer />
                </PropertyProvider>
            </UserProvider>
        </div >
    );
}

export default App;
