import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Expense Tracker',
    description: 'User can easily track his/her spendings.',
    image: './Images/2.png', // Replace with actual image paths
    link: '#',
  },
  {
    title: 'Simple Interest Calculator',
    description: 'User can easily calculate the amount he/she would get.',
    image: './Images/1.png', // Replace with actual image path
    link: '#',
  },
  {
    title: 'Simple Calculator',
    description: 'You can do your normal calculations here.',
    image: './Images/Calculator.jpg', // Replace with actual image path
    link: '#',
  },
  {
    title: 'TO-DO List',
    description: 'You can write all your daily chores and manage them.',
    image: './Images/To-do1.jpg', // Replace with actual image path
    link: '#',
  },
  {
    title: 'Responsive Login Form',
    description: 'Made a login and signup form which is responsive.',
    image: './Images/Login_form.png', // Replace with actual image path
    link: '#',
  },
  {
    title: 'Scientific Calculator',
    description: 'You can do your scientific calculations here.',
    image: './Images/science.jpg', // Replace with actual image path
    link: '#',
  },
];

function Project() {
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
