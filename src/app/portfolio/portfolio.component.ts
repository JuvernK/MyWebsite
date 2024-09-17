import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Project } from '../models/project';
import { ProjectsService } from '../service/project.service';
import { CommonModule } from '@angular/common';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CollapseDirective,
} from '@coreui/angular';
import { FormBuilder, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { Tag } from '../models/tag';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ProjectCardComponent,
    ButtonDirective,
    CardBodyComponent,
    CardComponent,
    CollapseDirective,
    ReactiveFormsModule,
  ],
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[];
  isCollapsed: boolean = true;
  isFiltering: boolean = false;

  filterForm = this.formBuilder.group({
    TypeScript: [true],
    Angular: [true],
    Python: [true],
    Java: [true],
    C: [true],
    NodeJs: [true],
  });


  constructor(
    private titleService: Title,
    private projectsService: ProjectsService,
    private formBuilder: FormBuilder
  ) {
    this.titleService.setTitle("Juvern's web - Portfolio");
  }

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }

  myFilter() {

    const tagMap: { [key: string]: Tag } = {
      TypeScript: Tag.TYPESCRIPT,
      Angular: Tag.ANGULAR,
      Python: Tag.PYTHON,
      Java: Tag.JAVA,
      C: Tag.C,
      NodeJs: Tag.NODEJS,
    }

    const selectedTags: Tag[] = Object.keys(this.filterForm.controls)
    .filter(key => this.filterForm.get(key)?.value)
    .map(key => tagMap[key]);

    console.log(selectedTags);
    if (selectedTags.length > 0) {
      this.isFiltering = true;
    }
      
    this.projects = this.projectsService.getProjectsByTag(selectedTags);
  }

  resetFilter() {
    this.filterForm.reset();
    this.isFiltering = false;
    this.projects = this.projectsService.getProjects();
  }




}
