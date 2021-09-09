import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Chat from './Chat';
import React from 'react';
import Login from './Login';
import { useStateValue } from './StateProvider';
function App() {
   {/* Header */}
        {/* Sidebar */}
        {/* React-Router -> Chat screen */}
  const [{user},dispatch]=useStateValue();
  //const [user,setUser]=useState(null);
  return (
        
    <div className="app">
      <Router>
        {!user?(<Login/>):(
          <>
          <Header/>
          <div className="app__body">
            <Sidebar/>
            <Switch>
              <Route path="/room/:roomId">
                <Chat/>
                {/* <h1>Chat Screen</h1> */}
  
              </Route>
              <Route path="/">
                <h1>Welcome</h1>
  
              </Route>
            </Switch>
          </div>
          </>
        )}
        
      </Router>
    </div>
  );
}

export default App;
