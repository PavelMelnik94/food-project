import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="content">
      <Header />

      <main className="container content">
        <Router>
<Route path='/about' component={About} />
<Route path='/contact' component={Contact} />
<Route path='/Home' component={Home} />

        </Router>
      </main>

      <Footer />
    </div>
  );
}

export default App;
