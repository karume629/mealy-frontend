import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/admin/AdminLogin';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/home/Dashboard';
import Home from './components/home/Home';
import Meals from './components/meals/Meal';
// import Footer from './components/nav/Footer';
import Nav from './components/nav/Nav';
import Caterer from './components/admin/Admin';
import Orders from './components/admin/Orders';
import MealList from './components/admin/MealList';
import CheckoutList from './components/checkout/CheckoutList';
import ConfirmOrder from './components/payment/ConfirmOrder';
import SingleMeal from './components/meals/SingleMeal';
import CustomerOrders from './components/orders/CustomerOrders';
import EditOrder from './components/orders/EditOrder';
import EditMeal from './components/admin/EditMeal';

function App() {
  const [user, setuser] = useState({})
  const [isLoggedIn, setisLoggedIn] = useState(false)
  // const [loading, setloading] = useState(false)

  useEffect(() => {
    const user_id = sessionStorage.getItem('user_id');
    const admin_id = sessionStorage.getItem('admin_id');

    if (admin_id) {
      fetch(`http://localhost:3000/admins/${admin_id}`)
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
    }
 
    if (user_id) {
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
    }

    
  }, [])
  

  function getUser(data){
    setuser(data)
    setisLoggedIn(true)
  }

  function logout(){
    sessionStorage.clear();
    setuser({})
    setisLoggedIn(false)
    window.location.reload();
  }


  let loginRoutes = (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/meals/" element={<Meals />} />
      <Route exact path="/login" element={<Login getUser={getUser} />} />
      <Route exact path="/login/admin" element={<AdminLogin getUser={getUser} />} />
      <Route exact path="/register" element={<Register getUser={getUser} />} />
      <Route path='*' element={<Navigate to="/login" />}/>
    </Routes>
  )

  let routes = (
    <>
        <Routes>
          <Route exact path="/meals/" element={<Meals isLoggedIn={isLoggedIn} />} />
          <Route exact path="/meals/:id/:meal" element={<SingleMeal />} />
          <Route exact path="/cart" element={<CheckoutList />} />
          <Route exact path="/order/confirm" element={<ConfirmOrder user={user} />} />
          <Route exact path="/order/:id/edit" element={<EditOrder />} />
          <Route exact path="/katy/orders" element={<CustomerOrders />} />
          <Route exact path="/admin" element={<Caterer user={user} />} />
          <Route exact path="/admin/orders" element={<Orders user={user} />} />
          <Route exact path="/admin/menu" element={<MealList user={user} />} />
          <Route exact path="/admin/menu/edit/:id" element={<EditMeal />} />
          <Route exact path="/dashboard" element={<Dashboard user={user} />} />
          {
            user.is_admin ?
            <Route path="*" replace element={<Navigate to="/admin" />} />
            :
            <Route path="*" element={<Navigate to="/dashboard" />} />
          }
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
