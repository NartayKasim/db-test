import React from 'react';
import { Switch, Route } from 'react-router-dom';
import InstructorNav from './components/instructors/InstructorNav';
import InstructorGateway from './components/instructors/InstructorGateway';
import About from './components/instructors/About';
import Login from './components/Login';

export default (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/instructors/" component={InstructorNav} />
        <Route path="/instrutors/gateway" component={InstructorGateway} />
        <Route path="/instructors/about" component={About} />
    </Switch>
)

