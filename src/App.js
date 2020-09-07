import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Categories from './components/Categories';
import Cart from './components/Cart';
import Footer from './components/Footer'
import EditProfile from './components/my/EditProfile'
import Order from './components/my/Order'
import Profile from './components/my/Profile'
import Address from './components/checkout/Address'
import CheckoutCart from './components/checkout/Cart'
import Payment from './components/checkout/Payment'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {



  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      showInNavbar: true,
    },
    {
      pageLink: '/login',
      view: Login,
      displayName: 'Login',
      showInNavbar: true,
    },
    {
      pageLink: '/categories',
      view: Categories,
      displayName: 'Categories',
      showInNavbar: false,
    },
    {
      pageLink: '/cart',
      view: Cart,
      displayName: 'Cart',
      showInNavbar: false,
    },
    {
      pageLink: '/my/editprofile',
      view: EditProfile,
      displayName: 'EditProfile',
      showInNavbar: false,
    },
    {
      pageLink: '/my/profile',
      view: Profile,
      displayName: 'Profile',
      showInNavbar: false,
    },
    {
      pageLink: '/my/order',
      view: Order,
      displayName: 'Order',
      showInNavbar: false,
    },
    {
      pageLink: '/my/profile',
      view: EditProfile,
      displayName: 'Profile',
      showInNavbar: false,
    },
    {
      pageLink: '/checkout/address',
      view: Address,
      displayName: 'Checkout-Address',
      showInNavbar: false,
    },
    {
      pageLink: '/checkout/cart',
      view: CheckoutCart,
      displayName: 'Checkout-cart',
      showInNavbar: false,
    },
    {
      pageLink: '/checkout/payment',
      view: Payment,
      displayName: 'Checkout-Payment',
      showInNavbar: false,
    },
  ];

  return (
    <div className="App">
 
      <NavBar/>
      
      <div className="nav-top">   
        <Switch>
          {pages.map((page, index) => {
            return (
              <Route
                exact
                path={page.pageLink}
                component={page.view}
                key={index}
              />
            );
          })}
          <Redirect to="/" />
        </Switch>
       
        </div>
        
    </div>
  );
}

export default App;
