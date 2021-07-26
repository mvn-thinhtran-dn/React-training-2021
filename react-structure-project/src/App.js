import Footer from "./components/Footer";
import Header from "./components/Header";
import Features from "./pages/Features";
import {Switch, Route} from 'react-router-dom'
import PrivateRoute from "./core/guards/PrivateRoute";
import Account from "./pages/Account";
import Auth from "./pages/Auth"

function App() {
  return (
    <>
      <Header/>
      <main className="page-main">
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
      </main>
      <Footer/>
    </>
  );
}

export default App;
