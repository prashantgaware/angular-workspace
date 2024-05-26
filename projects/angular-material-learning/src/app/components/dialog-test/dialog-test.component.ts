import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-test',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './dialog-test.component.html',
  styleUrl: './dialog-test.component.css'
})
export class DialogTestComponent {

  /**
   *
   */
  constructor(private dialog: MatDialog) {
    
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '50%',
      height: '40%',
      data: {
        
      }
    });
  }

}
