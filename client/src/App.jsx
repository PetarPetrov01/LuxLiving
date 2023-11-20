import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { PropertyProvider } from './contexts/PropertyContext';
import { UserProvider } from './contexts/UserContext';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { Details } from './components/Details/Details';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Create } from './components/Create/Create';
import { Edit } from './components/Edit/Edit';
import { Profile } from './components/Profile/Profile';
import { Footer } from './components/Footer/Footer';
import { NotFound } from './components/NotFound/NotFound';

import { UserGuard } from './components/RouteGuards/UserGuard';
import { OwnerGuard } from './components/RouteGuards/OwnerGuard';

import { GlobalStyle, theme } from './styles/GlobalStyles';

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
        </div >
    );
}

export default App;
