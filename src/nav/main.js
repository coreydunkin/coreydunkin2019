import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import GLC from '../WebGL/GLCommander/index.js';

import Home from '../home/main';
import About from '../about/main';

class Nav extends Component {
    handleClickIceCream = (init) => {
        GLC.changeNumbersIceCream();
    }  
    handleClickAnim = (init) => {
      GLC.changeNumbersAnim();
    }  
  render() {
    return (
      <Router>
        <Route
        render={({ location }) => (
        <div>
          <ul className="nav">
            <li>
              <Link to="/" onClick={this.handleClickIceCream}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={this.handleClickAnim}>About</Link>
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
