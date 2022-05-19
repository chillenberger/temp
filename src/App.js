
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Layout} from './components/layout'
import Login from './pages/login'
import Dashboard from './pages/dashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
