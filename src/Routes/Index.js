import { Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import Landing from '../screen/Landing'
import AboutMe from "../screen/AboutMe"
import Contactme from "../screen/Contactme"
import Portfolio from '../screen/Portfolio'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Switch >
          <Route
            exact
            path="/"
            render={props => <Landing {...props} />}
          />
          <Route
            exact
            path="/aboutme"
            render={props => <AboutMe {...props} />}
          />
          <Route
            exact
            path="/contact"
            render={props => <Contactme {...props} />}
          />
          <Route
            exact
            path="/portfolio"
            render={props => <Portfolio {...props} />}
          />
        </Switch>
      </div>
    )
  }
}
