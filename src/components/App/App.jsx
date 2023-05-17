import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Signin from '../Signin/Signin'
import Signup from '../Signup/Signup'
import Favorites from '../Favorites/Favorites'
import History from '../History/History'
import Search from '../Search/Search'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/history' element={<History />}/>
        <Route path='/search' element={<Search />}/> 
      </Route>
    </Routes>
  );
}

export default App;
