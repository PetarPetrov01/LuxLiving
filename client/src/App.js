import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { GlobalStyle } from './components/GlobalStyles';
import { Login } from './components/Login/Login';
import { Catalog } from './components/Catalog/Catalog';
import { Register } from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <main>
        <Routes>
          <Route path='/catalog' element={<Catalog />}></Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route></Route>
          <Route></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
