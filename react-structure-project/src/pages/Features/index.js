import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'
import Home from './Home';
import AboutUs from './AboutUs'
import Products from './Products';
import Auth from '../Auth';

const Features = () => {
  return (
    <>
      {/* <Home/> */}
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/product">
          <Products />
        </Route>
        <Route path="/about" >
          <AboutUs/>
        </Route>
        <Route path="/auth/login" >
          <Auth/>
        </Route>
      </Switch>
    </>
  );
};

export default Features;