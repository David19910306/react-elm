import './App.css';
import Cities from "./pages/Cities";
import {Redirect, Route, Switch} from "react-router-dom";
import City from "./pages/Cities/City";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/home' component={Cities} />
        <Route path='/city/:name/:id' component={City} />
        <Redirect to='/home' component={Cities}/>
      </Switch>
    </div>
  );
}

export default App;
