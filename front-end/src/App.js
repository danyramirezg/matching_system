import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/forms/SignIn';
import Register from './components/forms/Register';
import Teams from './components/teams/Teams';
import NewTeam from './components/forms/NewTeam';
import Team from './components/teams/Team';
import Projects from './components/projects/Projects';
import NewProject from './components/forms/NewProject';
import Project from './components/projects/Project';

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/auth/sign-in' component={SignIn} />
        <Route exact path='/auth/register' component={Register} />
        <Route exact path='/teams' component={Teams} />
        <Route exact path='/teams/new' component={NewTeam} />
        <Route exact path='/team' component={Team} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/projects/new' component={NewProject} />
        <Route exact path='/project' component={Project} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
