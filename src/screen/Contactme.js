import React, { Component } from 'react'

export default class Contactme extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="contactmeContainer">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" />
        <div className="contactme">
          <div class="animated fadeIn bounce delay-1s">
            <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h1>
              Contact Information
        </h1>
            <div className="CT">
              <div>Bobby Liu</div>
              <div>New York, New York City</div>
            </div>
            <div className="ContactInfoContainer">
              <div className="ContactInfoInner">
                <div className="email">
                  <i class="fa fa-envelope-o" style={{ fontSize: "2.5em", paddingRight: "1em" }}></i> Bliu104@gmail.com
            </div>
                <div className="contactInfo">
                  <a href='https://drive.google.com/file/d/1Jd1VUKgKxzNKmCr-rjX--xoc8M4ex4_f/view?usp=sharing' target="_blank" class="animated fadeInUp bounce delay-2s"><i class="fa fa-file-text-o" style={{ fontSize: "2.5em", color: 'white', paddingRight: "1.2em" }}></i>Resume</a>
                  <a href="https://www.linkedin.com/in/bobby-liu-389703185/" target="_blank" class="animated fadeInUp bounce delay-3s"><i class="fa fa-linkedin-square" style={{ fontSize: "3em", color: '#0073B0', paddingRight: ".8em" }} />www.linkedin.com/in/bobbyliu3</a>
                  <a href="https://github.com/bliu104?tab=repositories" target="_blank" class="animated fadeInUp bounce delay-4s"><i class="devicon-github-plain-wordmark colored" style={{ fontSize: "3.5em", color: "white", paddingRight: ".5em", paddingLeft: ".1em" }}></i>https://github.com/bliu104</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
