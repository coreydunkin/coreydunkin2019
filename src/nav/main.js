import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from '../home/main';
import About from '../about/main';

class Nav extends Component {
  
  render() {
    return (
      <Router>
        <Route
        render={({ location }) => (
        <div>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <TransitionGroup>
                {/* no different than other usage of
                CSSTransition, just make sure to pass
                `location` to `Switch` so it can match
                the old location as it animates out
            */}
            <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={300}
            >

            <Switch location={location}>


                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                {/* Without this `Route`, we would get errors during
                    the initial transition from `/` to `/hsl/10/90/50`
                */}
                    <Route render={() => <div>Not Found</div>} />
            </Switch>

            </CSSTransition>
          </TransitionGroup>

        </div>
        )}
        />
      </Router>
    );
  }
}

export default Nav;
