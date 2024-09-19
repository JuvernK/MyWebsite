import { Injectable } from '@angular/core';
import { ResumeContent } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ResumeContentService {

  resumeContent: ResumeContent[] = [
    {
      title: 'Education',
      content: 'Master in AI, Monash University Clayton Campus, Melbourne, Australia'
    },
    {
      title: 'Project Experience',
      content: 'Web Development using Angular, Pattern Recognition in Badminton Double Matches'
    },
    {
      title: 'Skills',
      content: 'Python, Java, Angular, C/C++'
    },
    {
      title: 'Certfications',
      content: 'To be updated'
    }
  ]

  getResumeContent() {
    return this.resumeContent;
  }
}
