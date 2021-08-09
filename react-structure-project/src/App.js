import React, { Suspense } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Features from "./pages/Features";
import {Switch, Route} from 'react-router-dom'
import PrivateRoute from "./core/guards/PrivateRoute";
// import Account from "./pages/Account";
// import Auth from "./pages/Auth"

const Account = React.lazy(() => import('./pages/Account'))
const Auth = React.lazy(() => import('./pages/Auth'))
const Features = React.lazy(() => import('./pages/Features'))


function App() {
  return (
    <>
      <Header/>
      <main className="page-main">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PrivateRoute path="/account">
            <Account />
          </PrivateRoute>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/">
            <Features />
          </Route>
        </Switch>
        </Suspense>
      </main>
      <Footer/>
    </>
  );
}

export default App;
