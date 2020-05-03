import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Introduction extends Component {
  constructor() {
    super()
  }
  redirect = () => {
    return (
      <Link to="/aboutme" class="animated fadeInUp delay-3s"><button className="introButton" style={{ fontSize: '2em', padding: '.5em' }}>About Me</button></Link>
    )
  }
  render() {
    return (
      <div className="intro">
        <div className="title">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" />
          <div class="animated fadeIn bounce">Software</div>
          <div className="secondWord">
            <div class="animated fadeIn bounce delay-1s">Engineer</div>
          </div>
          <p className="quote" style={{ fontSize: ".3em" }}>
            <div class="animated fadeInUp bounce delay-2s">
              "Just rememeber, you can't climb the ladder of success with your hands in your pocket."
            <br />-Arnold Schwarzenegger
            </div>
          </p>
        </div>
        {this.redirect()}
      </div >
    )
  }
}
