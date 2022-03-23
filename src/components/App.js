// Component Imports
import NavBar from './NavBar';
import Home from './Home'; 
import Wishlist from './Wishlist';
import Applied from './Applied'; 
import Replied from './Replied';

// App - component rendering all the child components forming the functionality
//       of the application, as well as containing the 'home' for most all of 
//       its stateful variables, as well as URL routing for certain components
// react-dom imports 
// Route - renders first matching child component based on URL'
// uses exact routes to not mistakenly render first component with '/' location
import { Route, Switch } from 'react-router-dom';

// react-bootstrap imports - CSS styles
import 'bootstrap/dist/css/bootstrap.min.css';

// useState import
import { useEffect, useState } from 'react';


function App() {

  // jobs - the entire list of jobs from db.json/user input that will be 
  //        statefully rendered by the application
  // setJobs - will setJobs upon initial GET request from db.json
  const [jobs, setJobs] = useState([]);

  // upon INITIAL render (empty dependency array), will make a GET request and
  // update state of jobs - these jobs are then passed down to their respective
  // child components, where they are displayed as cards for the user
  useEffect(() => {
      fetch('http://localhost:3000/jobs')
      .then(response => response.json())
      .then(result => {setJobs(result)});
    }, [])

  // upon 'Apply' field being changed via user click, the 'applied' field is
  // set to true - this will render it in the Applied component from Wishlist
  // maps to new Array, then uses setState to update the changes to the job 
  // selected
  // passed down to Wishlist component
  function handleApply(appliedJob) {
    const newJobs = jobs.map((job)=> {
      if (job.id !== appliedJob.id) {
        return job;
      }
      return {...job, applied: true}; 
    })
    setJobs(newJobs);
  }

  // same function as handleApply, however this will change the 'replied' field
  // to  true and render it in the Replied component 
  // passed down to Applied component, then to JobItem, where the patch request
  // is made
  function handleReply(repliedJob) {
    const newJobs = jobs.map((job)=> {
      if (job.id !== repliedJob.id) {
        return job;
      }
      return {...job, replied: true};
    })
    setJobs(newJobs);
  }

  // handles addition of a new job application, updating the state array of job
  // objects - they will default to Wishlist (TODO: allow users to add
  // anywhere in the applicaton process)
  // passed down to the NavBar component, then to the NewJobForm modal where
  // the 'POST' request for a job application is made upon submission
  function handleAdd(newJob) {
    setJobs([...jobs, newJob]); 
  }

  // upon deletion of a job, this will remove the job from the 'jobs' object
  // array -> it will then no longer render
  // TODO: store the deleted object temporarily so that users can reverse this
  // action
  // passed down all child components containing job cards (Wishlist, Applied,
  // Repied), then passed down to the JobItem component where the DELETE 
  // request is made to database, after which this function removes from state
  function handleDelete(deletedJob) {
    const newJobs = jobs.filter((job) => job.id !== deletedJob.id);
    setJobs(newJobs); 
  }


  return (
    <div>
      <NavBar onAdd={handleAdd} />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/wishlist'>
          <Wishlist jobs={jobs} onApply={handleApply} onDelete={handleDelete} />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/applied'>
          <Applied jobs={jobs} onReply={handleReply} onDelete={handleDelete}/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/replied'>
          <Replied jobs={jobs} onDelete={handleDelete}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
