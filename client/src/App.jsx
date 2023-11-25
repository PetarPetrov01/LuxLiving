import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { PropertyProvider } from './contexts/PropertyContext';
import { UserProvider } from './contexts/UserContext';

import { Header } from './components/Header/Header';
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
                                {publicRoutes.map((r) => <Route
                                    element={r.element()}
                                    path={r.path}
                                    key={r.path} />)}

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
