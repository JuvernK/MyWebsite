import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProjectsService } from '../service/projects.service';
import { Project } from '../models/project';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  featuredProjects = {} as Project;

  constructor(
    private titleService: Title,
    private projectsService: ProjectsService
  ) {
    this.titleService.setTitle("Juvern's web - Home Page");
  }
  ngOnInit(): void {
    this.featuredProjects = this.projectsService.getProjectByID(0);
  }
}
