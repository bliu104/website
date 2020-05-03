import React, { Component } from 'react'
import About from "./About"
import Skills from "./Skills"
export default class AboutMe extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" />
        <About />
        <div class="animated fadeIn bounce delay-2s">
          <Skills />
        </div>
      </div >
    )
  }
}
