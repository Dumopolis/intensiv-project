import { Route, Routes } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import Favorites from '../Favorites/Favorites';
import History from '../History/History';
import SearchPage from '../SearchPage/SearchPage';
import RequireAuth from '../RequireAuth/RequireAuth';
import CardOpened from '../CardOpened/CardOpened';
import { ContextProvider } from '../../context/context';


function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/favorites' element={
            <RequireAuth>
              <Favorites />
            </RequireAuth>
          } />
          <Route path='/history' element={
            <RequireAuth>
              <History />
            </RequireAuth>
          } />
          <Route path='/search' element={
            <RequireAuth>
              <SearchPage />
            </RequireAuth>} />
          <Route path='/news/:id' element={
            <RequireAuth>
              <CardOpened />
            </RequireAuth>} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
