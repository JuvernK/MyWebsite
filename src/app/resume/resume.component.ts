import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { ResumeContentService } from '../service/resume-content.service';
import { ResumeContent } from '../models/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AccordionModule, CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {

  resumeContent: ResumeContent[] = []
  expandedIndex: number = 0;

  constructor(private titleService: Title,
              private resumeContentService: ResumeContentService, 
              private renderer: Renderer2) {
    this.titleService.setTitle("Juvern's web - Resume");
  }

  ngOnInit(): void {
    this.resumeContent = this.resumeContentService.getResumeContent();
  }

  DownloadResume() {
    let link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/Resume.pdf');
    link.setAttribute('download', 'JuvernResume.pdf');
    link.click();
    link.remove();
  }

}
 