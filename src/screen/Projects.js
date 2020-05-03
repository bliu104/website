import React, { Component } from 'react'

export default class Projects extends Component {
  constructor() {
    super()
    this.state = {
      projects: [
        {
          name: "Pokemon",
          link: "http://pokeassist.surge.sh/homepage.html",
          image: "https://i.imgur.com/P5Kc4U0.png",
          languages: "Javascript, HTML, CSS",
          github: 'https://github.com/bliu104/PokeGame',
          Description: "A quick and simple Pokemon website that includes a Pokedex with a simulation battling system similar to the game produced by the Pokemon Co. Pokeassist is written with vanilla Javascipt, HTML and CSS. The external API call uses AXIOS, calling from POKEAPI"
        },
        {
          name: "NYPD Infograph",
          link: "https://nypdinfographga.netlify.app/",
          image: 'https://i.imgur.com/mKGvyC5.png',
          languages: "React, NodeJS, Javascript",
          github: 'https://github.com/bliu104/NYPD-arrest',
          Description: "NYPD Infograph is a website that shows crimes by percinct. It uses axios to fetch data from NYC public records. This application uses a React Framework."
        },
        {
          name: "FoodBlog",
          link: "http://bobby-food-blog-4.surge.sh/",
          image: 'https://i.imgur.com/PGC2gue.png',
          languages: "React, NodeJS, Javascript, Ruby, Express",
          github: 'https://github.com/bliu104/Best-Blog',
          Description: "FoodBlog is a web application where a register user can create, delete, modify, and display recipes. FoodBlog uses a React framework for the user interface, and Ruby of Rails for the backend developement. The database is created with express and deployed with heroku."

        }
      ]
    }
  }
  getProject = () => {
    const { projects } = this.state
    return projects.map(project => {
      return (
        <div class="animated fadeIn bounce delay-1s" style={{ display: "flex", justifyContent: "center" }}>
          <div className="projectContainer" >
            <div className="subContainer">
              <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"></link>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
              <div style={{ fontSize: "4em", paddingBottom: "1em" }}>{project.name}</div>
              <img src={project.image} style={{ paddingBottom: '1.5em' }} />
              <div className="button">
                <a href={project.link} target="_blank">
                  <button><i class="fa fa-television" style={{ fontSize: "4em" }}></i>
                    <div style={{ fontSize: "2em" }}>
                      Live Site
                  </div>
                  </button>
                </a>
                <a href={project.github} target="_blank">
                  <button><i class="devicon-github-plain-wordmark colored" style={{ color: "white", fontSize: "4em" }}></i>
                    <div style={{ fontSize: "2em" }}>Code</div>
                  </button>
                </a>
              </div>
            </div>
            <div className="projectDescription">{project.Description}</div>
          </div >
        </div >
      )
    })
  }
  render() {
    this.getProject()
    return (
      <div className="outterProjectLayer">
        <div style={{ fontSize: "4em", paddingTop: "1em" }}>Projects</div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" />
        {this.getProject()}
      </div>
    )
  }
}
