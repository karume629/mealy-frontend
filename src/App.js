import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminLogin from './auth/AdminLogin';
import './App.css';
import Login from './auth/Login';
import Register from './auth/Register';
import Dashboard from './home/Dashboard';
import Home from './home/Home';
import Meals from './meals/Meal';
// import Footer from './nav/Footer';
import Nav from './nav/Nav';
import Caterer from './caterer/Caterer';
import Orders from './orders/Orders';
import MealList from './meals/MealList';
import CheckoutList from './checkout/CheckoutList';
import ConfirmOrder from './payment/ConfirmOrder';
import SingleMeal from './meals/SingleMeal';
import CustomerOrders from './orders/CustomerOrders';
import EditOrder from './orders/EditOrder';

function App() {
  const [user, setuser] = useState({})
  const [isLoggedIn, setisLoggedIn] = useState(false)
  // const [loading, setloading] = useState(false)

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


  let loginRoutes = (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/meals/" element={<Meals />} />
      <Route exact path="/login" element={<Login getUser={getUser} />} />
      <Route exact path="/l" element={<AdminLogin getUser={getUser} />} />
      <Route exact path="/register" element={<Register getUser={getUser} />} />
      <Route path='*' element={<Navigate to="/login" />}/>
    </Routes>
  )

  let routes = (
    <>
        <Routes>
          <Route exact path="/meals/" element={<Meals isLoggedIn={isLoggedIn} />} />
          <Route exact path="/meals/id" element={<SingleMeal />} />
          <Route exact path="/cart" element={<CheckoutList />} />
          <Route exact path="/order/confirm" element={<ConfirmOrder />} />
          <Route exact path="/order/id/edit" element={<EditOrder />} />
          <Route exact path="/katy/orders" element={<CustomerOrders />} />
          <Route exact path="/admin/" element={<Caterer />} />
          <Route exact path="/admin/orders" element={<Orders />} />
          <Route exact path="/admin/menu" element={<MealList />} />
          <Route exact path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
    </>
  )

  return (
    <>
    <Nav isLoggedIn={isLoggedIn} user={user} logout={logout} />
    {
        isLoggedIn ? 
        routes
        :
        loginRoutes
      }
    {/* <Footer /> */}
    </>
  );
}

export default App;
