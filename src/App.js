import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './auth/Login';
import Home from './home/Home';
import Nav from './nav/Nav';

function App() {
  const [user, setuser] = useState({})
  const [isLoggedIn, setisLoggedIn] = useState(false)

  useEffect(() => {
    const user_id = sessionStorage.getItem('user_id');

    fetch(`http://localhost:3000/users/${user_id}`)
    .then(res => {
      if (res.status === 200) {
        res.json().then(data => {
          getUser(data)
        })
      }else{
        res.json().then(data => {
          setuser({})
          setisLoggedIn(false)
        })
      }
    })
    
  }, [])
  

  function getUser(data){
    setuser(data)
    setisLoggedIn(true)
    sessionStorage.setItem('user_id', JSON.stringify(data.id));
  }

  function logout(){
    sessionStorage.removeItem('user_id');
    setuser({})
    setisLoggedIn(false)
    window.location.reload();
  }

  return (
    <>
    <Nav logout={logout} isLoggedIn={isLoggedIn} user={user} />
      <Routes>
        <Route exact path="/" element={<Home user={user} />} />
        <Route exact path="/login" element={<Login getUser={getUser} />} />
      </Routes>
    </>
  );
}

export default App;
