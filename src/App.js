import './App.css';

import Home from './pages/Home.js';
import About from './pages/About.js';

import Navbar from './components/Navbar';
import NavItem from "./components/NavItem";

import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';

export default function App() {
  return (
      <Router>
        <div className='App'>
          <Navbar>
            <NavItem activeClassName='active' exact to='/' position='left'>Home</NavItem>
            <NavItem activeClassName='active' to='/about' position='right'>About</NavItem>
          </Navbar>
          <div className='content'>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/about' component={About}/>
            </Switch>
          </div>
        </div>
      </Router>
  );
}
