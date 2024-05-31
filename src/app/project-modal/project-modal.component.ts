import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Project } from '../models/project';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  ThemeDirective,
  CarouselComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
  CarouselControlComponent,
} from '@coreui/angular';
@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [
    MatIconModule,
    ThemeDirective,
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    NgFor,
    CarouselItemComponent,
    CarouselControlComponent,
    RouterLink,
  ],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
})
export class ProjectModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ProjectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { project: Project }
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
