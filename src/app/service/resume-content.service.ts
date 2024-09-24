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
      content: 'Bachelor in Computer Science at Monash University, Diploma in Higher Education Studies, Diploma in Canadian International Matriculation Programme(CIMP)',
      image: ['../assets/resume-content/Certificates/Cert_Proj_Archievement.png',
              '../assets/resume-content/Certificates/Cert_Project_Award.png',
              '../assets/resume-content/Certificates/Diploma_CIMP.png',
              '../assets/resume-content/Certificates/Diploma_DHES.png']
    }
  ]

  getResumeContent() {
    return this.resumeContent;
  }
}
