import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Onderwijsbiografie from './components/Onderwijsbiografie';
import Datapunten from './components/Datapunten';
import NoMatch from './components/NoMatch';

export default function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Datapunten />} />
          <Route path="onderwijsbiografie" element={<Onderwijsbiografie />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
    </>
  );
}