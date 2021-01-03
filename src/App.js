import React, {useState, useEffect} from 'react'
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import CompetePage from './pages/CompetePage';
import ContentPage from './pages/ContentPage';


const App = () => {
  return (
    <div>
      <HashRouter>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/learn" exact component={LearnPage} />
          <Route path="/compete" exact component={CompetePage} />
          {/* ye wala page ko manually khol ke dekh lena, time nhi tha isliye aise kr diye h */}
          <Route path="/content" exact component={ContentPage} />
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App;
