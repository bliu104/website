import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div className='skills'>
        <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"></link>
        <div className="skillsContainer">

          <h1 style={{ color: "white" }}>My Tool Box</h1>
          <div className="skillList">
            <i class="devicon-java-plain-wordmark colored"></i>
            <i class="devicon-javascript-plain colored" />
            <i class="devicon-css3-plain-wordmark colored"></i>
            <i class="devicon-html5-plain-wordmark colored"></i>
            <i class="devicon-cplusplus-plain-wordmark colored"></i>
            <i class="devicon-ruby-plain-wordmark colored"></i>
            <i class="devicon-python-plain-wordmark colored"></i>
            <i class="devicon-react-original-wordmark colored"></i>
            <i class="devicon-nodejs-plain-wordmark colored"></i>
            <i class="devicon-rails-plain-wordmark colored"></i>
            <i class="devicon-mongodb-plain-wordmark colored"></i>
            <i class="devicon-express-original-wordmark" style={{ color: "white" }}></i>
            <i class="devicon-postgresql-plain-wordmark colored"></i>
            <i class="devicon-github-plain-wordmark colored" style={{ color: "white" }}></i>
            <i class="devicon-chrome-plain-wordmark colored"></i>
          </div>
        </div >
      </div>
    )
  }
}
