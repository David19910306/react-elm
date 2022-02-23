import './App.css';
import Cities from "./pages/Cities";
import {Redirect, Route, Switch} from "react-router-dom";
import {City, Home} from '@/router'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/index' component={Cities} />
        <Route path='/city/:name/:id' component={City} />
        <Route path='/home' component={Home}/>
        <Redirect to='/index'/>
      </Switch>
    </div>
  );
}

export default App;
