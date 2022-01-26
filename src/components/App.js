// Component Imports
import NavBar from './NavBar';
import Home from './Home'; 
import Wishlist from './Wishlist';
import Applied from './Applied'; 
import Replied from './Replied';

// react-dom imports 
import { Route, Switch } from 'react-router-dom';

// react-bootstrap imports
import { Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/home'>
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/wishlist'>
          <Wishlist />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/applied'>
          <Applied />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/replied'>
          <Replied />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
