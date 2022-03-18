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
      .then(result => {setJobs(result)});
    }, [])

  // change state of job 'applied' field after patch request is made
  function handleApply(appliedJob) {
    const newJobs = jobs.map((job)=> {
      if (job.id !== appliedJob.id) {
        return job;
      }
      return {...job, applied: true}; 
    })
    setJobs(newJobs);
  }

  // change state of job 'applied' field after patch reqeust is made
  function handleReply(repliedJob) {
    const newJobs = jobs.map((job)=> {
      if (job.id !== repliedJob.id) {
        return job;
      }
      return {...job, replied: true};
    })
    setJobs(newJobs);
  }

  function handleAdd(newJob) {
    setJobs([...jobs, newJob]); 
  }

  function handleDelete(deletedJob) {
    const newJobs = jobs.filter((job) => job.id != deletedJob.id);
    setJobs(newJobs); 
  }
  return (
    <div>
      <NavBar onAdd={handleAdd} />
      <Switch>
        <Route exact path='/home'>
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
