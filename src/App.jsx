import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { PropertyProvider } from './contexts/PropertyContext';
import { UserProvider } from './contexts/UserContext';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { NotFound } from './components/NotFound/NotFound';

import { publicRoutes, userRoutes } from './Routes';
import { UserGuard } from './components/RouteGuards/UserGuard';

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
                                {publicRoutes.map((r) => <Route
                                    element={r.element()}
                                    path={r.path}
                                    key={r.path} />)}

                                <Route element={<UserGuard />}>
                                    {userRoutes.map((r) => <Route
                                        element={r.element()}
                                        path={r.path}
                                        key={r.path} />)}
                                </Route>

                                <Route path='/*' element={<NotFound />} />
                            </Routes>
                        </main>
                        <br></br>
                        <Footer />
                    </PropertyProvider>
                </UserProvider>
            </ThemeProvider>
        </div >
    );
}

export default App;
