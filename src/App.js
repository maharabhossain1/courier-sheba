import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddService from "./components/AddService/AddService";
import Login from "./components/Authentication/Login/Login";
import PrivateRoute from "./components/Authentication/PrivateRoute/PrivateRoute";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Home from "./components/Home/Home";
import ManageAllOrder from "./components/ManageAllOrder/ManageAllOrder";
import MyOrders from "./components/MyOrders/MyOrders";
import NotFound from "./components/Notfound/NotFound";
import Servicing from "./components/Servicing/Servicing/Servicing";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/myorder">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute path="/manageallorder">
              <ManageAllOrder />
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <AddService />
            </PrivateRoute>
            <PrivateRoute path="/servicing/:serviceId">
              <Servicing />
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
