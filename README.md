# Jobase
Jobase is a React single-page application for tracking progress of job  
applications. 

# Setup 

Use the package manager [npm](https://docs.npmjs.com/) to install the required dependencies for running jobase. 
```
npm install
```
To run the [json-server](https://www.npmjs.com/package/json-server) backend, 
in the main directory containing ```db.json``` run the command:
```
json-server --watch db.json
```
Then, in a separate terminal and the same directory run:
```
npm start
``` 
to compile and open Jobase in your web browser. 

# Usage
Jobase can be navigated in any updated web browser. Users can add jobs to a  
list of their applications via the 'New Job' tab, and navigate job  
applications through their various stages (wishlist, applied, replied) via the  
navigation bar at the top of the page. 

# Technologies Used

Jobase was made using 
[React](https://reactjs.org/docs/getting-started.htmlhttps://reactjs.org/) 
and created using [Create React App](https://create-react-app.dev/docs/getting-started),  
with routing handled by [React Router](https://reactrouter.com/docs/en/v6).

Design and UI were managed via [React Bootstrap](https://react-bootstrap.github.io/) 
with icons from [React Icons](https://react-icons.github.io/react-icons/).

# TODO 

Currently, this project is a frontend-only application. However, changes may  
be added down the road to include a backend which will allow for more  
sophisticated features, such as user logon and incorporation of job site  
application data. 