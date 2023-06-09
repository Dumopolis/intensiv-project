import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ContextProvider } from '../../context/context';
import Loader from '../Loader/Loader';

const RequireAuth = lazy(() => import('../RequireAuth/RequireAuth'));
const RequireUnAuth = lazy(() => import('../RequireUnAuth/RequireUnAuth'));
const Layout = lazy(() => import('../Layout/Layout'));
const Home = lazy(() => import('../Home/Home'));
const Signin = lazy(() => import('../Signin/Signin'));
const Signup = lazy(() => import('../Signup/Signup'));
const Favorites = lazy(() => import('../Favorites/Favorites'));
const History = lazy(() => import('../History/History'));
const SearchPage = lazy(() => import('../SearchPage/SearchPage'));
const CardOpened = lazy(() => import('../CardOpened/CardOpened'));



function App() {
  return (
    <ContextProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/signin' element={
              <RequireUnAuth >
                <Signin />
              </RequireUnAuth>
            } />
            <Route path='/signup' element={
              <RequireUnAuth >
                <Signup />
              </RequireUnAuth>
            } />
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
      </Suspense>
    </ContextProvider>
  );
}

export default App;
