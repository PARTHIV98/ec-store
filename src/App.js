import React from "react";
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import HomePage from "./pages/homepage/home.component";
import Shop from "./pages/shop/Shop";

const HatsPage = () => (
<div>
  <h1>Hats Page</h1>
</div>
)
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
