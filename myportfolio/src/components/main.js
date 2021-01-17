import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "./Home/home"
import About from "./About/about"
import Contact from "./Contact/contact"
import Projects from "./Projects/projects"
import Resume from "./Resume/resume"

const Main = () => (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
        </Switch>
    )

export default Main
