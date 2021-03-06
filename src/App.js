import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "./App.css";
import {Home} from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { Category } from "./pages/Category";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <div className="app">
      <Router basename='/food-project'>
        <Header />

        <main className="container content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contact} />
            <Route path="/category/:name" component={Category} />
            <Route path="/meal/:id" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
