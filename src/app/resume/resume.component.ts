import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle("Juvern's web - Resume");
  }
}
