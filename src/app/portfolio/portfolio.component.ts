import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Project } from '../models/project';
import { Tag } from '../models/tag';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../service/projects.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  imports: [RouterLink, RouterLinkActive, ProjectCardComponent, CommonModule],
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
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.projects = this.projectsService.getProjects();
  }
}
