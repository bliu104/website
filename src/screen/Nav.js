import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  constructor() {
    super()
  }

  routes = () => (

    <div className="Nav">
      <NavLink className='home' to="/" >Home</NavLink>
      <div className="subNav">
        <NavLink className='aboutme' to="/aboutme">About Me</NavLink>
        <NavLink className='portfolio' to="/portfolio" >Portfolio</NavLink>
        <a href='https://drive.google.com/file/d/1Jd1VUKgKxzNKmCr-rjX--xoc8M4ex4_f/view?usp=sharing' target="_blank">Resume</a>
      </div>
      <NavLink className='contact' to="/contact">Contact</NavLink>
    </div>

  )
  render() {
    return (
      <div className="NavOutside">
        {this.routes()}
      </div>
    )
  }
}
