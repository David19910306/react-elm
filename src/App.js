import './App.css';
import Cities from "./pages/Cities";
import {Redirect, Route, Switch} from "react-router-dom";
import {City, Home, Login} from '@/router'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/index' component={Cities} />
        <Route path='/city/:name/:id' component={City} />
        <Route path='/home' component={Home}/>
        <Route path='/login' component={Login}/>
        <Redirect to='/index'/>
      </Switch>
    </div>
  );
}

export default App;
