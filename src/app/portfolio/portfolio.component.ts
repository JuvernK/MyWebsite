import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Project } from '../models/project';
import { Tag } from '../models/tag';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  imports: [RouterLink, RouterLinkActive, ProjectCardComponent],
})
export class PortfolioComponent {
  project: Project = {
    id: 0,
    name: 'Sample Angular App',
    summary: 'Test Description',
    description: '',
    projectUrl: '',
    images: [],
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
  };

  constructor(private titleService: Title) {
    this.titleService.setTitle("Juvern's web - Portfolio");
  }
}
