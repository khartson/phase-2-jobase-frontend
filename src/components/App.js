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

  // state declaration
  const [jobs, setJobs] = useState([]);

  // fetch call for databased job applications
  useEffect(() => {
      fetch('http://localhost:3000/jobs')
      .then(response => response.json())
      .then(result => {setJobs(result); console.log(result)});
    }, [])

  // change state of job 'applied' field after patch request is made
  function handleApply(appliedJob) {
    console.log("jobs", jobs)
    const newJobs = jobs.map((job)=> {
      if (!appliedJob.id) {
        return job;
      }
      return {...job, applied: true}; 
    })
    setJobs(newJobs); 
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
          <Wishlist jobs={jobs} onApply={handleApply} />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/applied'>
          <Applied jobs={jobs} />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/replied'>
          <Replied jobs={jobs}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
