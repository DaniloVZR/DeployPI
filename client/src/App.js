import React from 'react';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import ActivityCreate from './components/ActivityCreate/ActivityCreate.jsx';
import ActivitiesList from './components/ActivitiesList/ActivitiesList.jsx';
import Detail from './components/Detail/Detail.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
axios.defaults.baseURL = 'http://localhost:3001/';
// PRUEBA
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Activity' component={ActivityCreate} />
          <Route exact path='/Activities' component={ActivitiesList} />
          <Route exact path='/Home/:id' component={Detail} />
          <Route exact path='/Home/:*' component={Detail} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
