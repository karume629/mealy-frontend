import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './auth/Login';
import Home from './home/Home';
import Nav from './nav/Nav';

function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
