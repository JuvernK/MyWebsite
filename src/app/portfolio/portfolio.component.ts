import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Project } from '../models/project';
import { ProjectsService } from '../service/project.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  imports: [CommonModule, RouterLink, RouterLinkActive, ProjectCardComponent],
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];

  constructor(
    private titleService: Title,
    private projectsService: ProjectsService
  ) {
    this.titleService.setTitle("Juvern's web - Portfolio");
  }

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}
