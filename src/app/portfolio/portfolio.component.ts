import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  imports: [RouterLink, RouterLinkActive, ProjectCardComponent],
})
export class PortfolioComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle("Juvern's web - Portfolio");
  }
}
