import './App.css';
import Cities from "./pages/Cities";
import {Redirect, Route, Switch} from "react-router-dom";
import {City, Home, Login, Food, Shop, ConfirmOrder} from "./router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/index' component={Cities} />
        <Route path='/city/:name/:id' component={City} />
        <Route path='/home' component={Home}/>
        <Route path='/food' component={Food}/>
        <Route path='/login' component={Login}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/confirmOrder' component={ConfirmOrder}/>
        <Redirect to='/index'/>
      </Switch>
    </div>
  );
}

export default App;
