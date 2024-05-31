import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ProjectModalComponent } from '../../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() project = {} as Project;

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    console.log('this.project: ', this.project['name']);
    const dialogRef = this.dialog.open(ProjectModalComponent, {
      width: '40rem',
      height: '45rem',
      data: { project: this.project },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
