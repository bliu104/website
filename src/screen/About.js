import React, { Component } from 'react'
import { useSpring, animated, config } from 'react-spring'

export default class About extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", color: "white" }}>
        <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" />

        <div className="Aboutme">
          <div class="animated fadeIn bounce delay-1s">
            <div className="subAboutme">

              <div style={{ display: "flex", justifyContent: "center", borderBottom: ".1em solid rgb(61,61,61)" }}>
                <div className="headerAboutMe">
                  <h1 style={{ fontSize: "3.5em", marginBottom: "0em", marginTop: "0.3em" }}>
                    Bobby Liu
              </h1>
                  <p style={{ fontSize: "1.5em", marginTop: ".3em" }}>
                    A Software Engineer
          </p>
                </div>
              </div>
              <div>
                <div className='aboutMeStuff'>
                  <img src="https://i.imgur.com/MJrrP7Y.jpg"
                    style={{ borderRadius: "30px", width: "23em", height: "30em", border: ".5em solid rgb(61,61,61)", marginRight: "2em", marginTop: "3em" }} />
                  <div className='aboutMeStatment'>
                    <h1>
                      About Me
                    </h1>
                    <p className="aboutMeDes">
                      I am a Full Stack developer with a strong knowledge in front-end and backend development. I have a love for strategy, structure and efficiency, with a passion to design, understand and create. Just doing is not satisfying enough, a project is only over when I stopped learning and growing. As a result, I enjoy spending time fixing details and optimizing my projects. In additon, I love teamwork. I have a drive for learning and whats a better way to learn than to see how others work. When I am not an Software Enginner I am an avid Weightlifter, Cyclist, world travler and a terrible singer. I was born and raised in New York City, and attended Queens College studying Finance, Economics, and Computer Science. After graduating, I spent a year travel through Japan, Malayasia, Korea and China learning and living a non-New York culture. Now that I am back, I recieved my Certificate of Completion at General Assembly's Software Engineer Immersive. P.S I benched 275 in January and that has been my crowning achievement
                </p>
                  </div>
                </div>
              </div>
              <div style={{ color: "white" }}>
                <div className="aboutMeLinks">

                  <a href='https://drive.google.com/file/d/1Jd1VUKgKxzNKmCr-rjX--xoc8M4ex4_f/view?usp=sharing' target="_blank" style={{ textDecoration: "none" }} class="animated fadeIn bounce delay-2s"><i class="fa fa-file-text-o" style={{ fontSize: "3.5em", color: 'white' }}></i><div style={{ textAlign: "left", fontSize: "1em", color: "white", paddingBottom: "2em" }}>Resume</div></a>


                  <a href="https://www.linkedin.com/in/bobby-liu-389703185/" target="_blank" class="animated fadeIn bounce delay-3s"><i class="fa fa-linkedin-square" style={{ fontSize: "5em", color: '#0073B0' }} /></a>


                  <a href="https://github.com/bliu104?tab=repositories" target="_blank" class="animated fadeIn bounce delay-4s"><i class="devicon-github-plain-wordmark colored" style={{ fontSize: "5em", color: "white" }}  ></i></a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
