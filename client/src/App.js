import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './components/GlobalStyles';
import { Catalog } from './components/Catalog/Catalog';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <main>
        <Routes>
          <Route path='/catalog' element={<Catalog />}></Route>
          <Route></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
