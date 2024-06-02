import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Sample Python Project',
      images: [
        './assets/avatar/image1.png',
        './assets/avatar/image2.png',
        './assets/avatar/image3.png',
      ],
      projectUrl: '//www.github.com',
      summary: 'Python project that analyzes stock market data.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.PYTHON],
    },

    {
      id: 1,
      name: 'Sample Angular App',
      images: [
        './assets/avatar/image1.png',
        './assets/avatar/image2.png',
        './assets/avatar/image3.png',
      ],
      projectUrl: '//www.github.com',
      summary: 'Fullstack web app developed using Angular and Node.JS',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },

    {
      id: 2,
      name: 'Sample .Net App',
      images: [
        './assets/avatar/image1.png',
        './assets/avatar/image2.png',
        './assets/avatar/image3.png',
      ],
      projectUrl: '//www.github.com',
      summary: 'Fullstack web app developed using React and ASP.NET',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.PYTHON],
    },

    {
      id: 3,
      name: 'Web API Project',
      images: [
        './assets/avatar/image1.png',
        './assets/avatar/image2.png',
        './assets/avatar/image3.png',
      ],
      projectUrl: '//www.github.com',
      summary: 'Web API Project that was developed for a class project.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.C],
    },

    {
      id: 4,
      name: 'Chrome Extension',
      images: [
        './assets/avatar/image1.png',
        './assets/avatar/image2.png',
        './assets/avatar/image3.png',
      ],
      projectUrl: '//www.github.com',
      summary:
        'Developed a chrome extension that tracks the prices of furniture.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.JAVA],
    },

    {
      id: 5,
      name: 'Mobile App',
      images: [
        './assets/avatar/image1.png',
        './assets/avatar/image2.png',
        './assets/avatar/image3.png',
      ],
      projectUrl: '//www.github.com',
      summary:
        'Mobile app developed in java that tracks the departure and arrival of trains.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: [Tag.TYPESCRIPT],
    },
  ];

  constructor() {}

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectByID(id: number): Project {
    let project = this.projects.find((project) => project.id === id);

    if (project === undefined) {
      throw new Error('Project not found');
    }

    return project;
  }
}
