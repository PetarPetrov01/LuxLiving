import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Catalog } from './components/Catalog/Catalog';
import { Register } from './components/Register/Register';
import { Home } from './components/Home/Home';
import { GlobalStyle } from './styles/GlobalStyles';
import { Create } from './components/Create/Create';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>

        <GlobalStyle />
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/catalog' element={<Catalog />}></Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create' element={<Create />} />
            <Route></Route>
          </Routes>
        </main>
      </UserProvider>
    </div>
  );
}

export default App;
