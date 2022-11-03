import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Contato from '../pages/Contato';

export default () => (
  <Routes>
    <Route path='/' element={<Header />} />
    <Route path='/contato' element={<Contato />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);
