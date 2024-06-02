import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Project } from '../../models/project';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [MatIconModule, CommonModule, MdbCarouselModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
})
export class ProjectModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProjectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { project: Project }
  ) {}

  ngOnInit(): void {
    console.log(this.data.project);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
