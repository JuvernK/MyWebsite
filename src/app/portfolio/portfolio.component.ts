import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle("Juvern's web - Portfolio");
  }
}
