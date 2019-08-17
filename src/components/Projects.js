import React from 'react';
import PROJECTS from '../data/projects';

// refactor for statless syntax. Can't use & must use class if you need state
const Project = props => {
  // Destructing syntax instead of const title = this.props.project.title 
  // and for all others image description link
  const { title, image, description, link } = props.project;

  return (
    <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
      <h3>{title}</h3>
      <img src={image} alt='profile' style={{ width: 200, height: 120 }} />
      <p>{description}</p>
      <a href={link}>{link}</a>
    </div>
  )
}

// if you only have a return statement you can remove it
// you can do an inline return
const Projects = () => (
  <div>
    <h2>Highlighted Projects</h2>
    <div>
      {
        PROJECTS.map((PROJECT) => (
          <Project key={PROJECT.id} project={PROJECT} />
        ))
      }
    </div>
  </div>
)

export default Projects;