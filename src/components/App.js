// Component Imports
import NavBar from './NavBar';
import Home from './Home'; 
import Wishlist from './Wishlist';
import Applied from './Applied'; 
import Replied from './Replied';

// react-dom imports 
import { Route, Switch } from 'react-router-dom';

// react-bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

// useState import
import { useEffect, useState } from 'react';


function App() {

  const [jobs, setJobs] = useState([]);

  function handleFetch(jobs){
    setJobs(jobs);
  }

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
          <Wishlist jobs={jobs} onFetch={handleFetch}/>
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
