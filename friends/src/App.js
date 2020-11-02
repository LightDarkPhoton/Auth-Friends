import logo from './logo.svg';
import './App.css';

import { axiosWithAuth } from './utils/axiosWithAuth'
import { Login } from './components/Login'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { FriendsList } from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute';
import { AddFriendsForm } from './components/AddFriendsForm'

function App() {
  return (
    <Router>
    <div className="App">
    <Link to="/login">Login</Link>
    <Link to="/protected">Protected Page</Link>

    <Switch>

      <PrivateRoute path="/protected" component={FriendsList} />
      <Route path="/login" component={Login} />
    </Switch>

      <Route exact path="/add-friend" component={AddFriendsForm} />
    </div>
    </Router>
  );
}

export default App;
