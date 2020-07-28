import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import { Header } from "./components/common/Header";
import PageNotFound from "./pages/PageNotFound";
import Books from "./pages/books/Books";
import Details from "./pages/books/Details";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="main-app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/books" component={Books} />
        <Route path="/book/:slug" component={Details} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
