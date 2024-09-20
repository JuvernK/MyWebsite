import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Project } from '../models/project';
import { ProjectsService } from '../service/project.service';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  featuredProjects = {} as Project;
  slides: any[] = [];

  constructor(
    private titleService: Title,
    private projectsService: ProjectsService
  ) {
    this.titleService.setTitle("Juvern's web - Home Page");
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.featuredProjects = this.projectsService.getProjectByID(0);
    this.slides = this.featuredProjects.images

    // this.slides = [
    //   {
    //     id: 0,
    //     src: this.featuredProjects.images[0],
    //     title: 'First slide',
    //     subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    //   },
    //   {
    //     id: 1,
    //     src: this.featuredProjects.images[1], 
    //     title: 'Second slide',
    //     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    //   },
    //   {
    //     id: 2,
    //     src: this.featuredProjects.images[2],
    //     title: 'Third slide',
    //     subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    //   }
    // ];
  }

}
