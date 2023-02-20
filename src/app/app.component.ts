import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseModal } from './components/modals/base-modal';
import { ConfirmCancelModalComponent } from './components/modals/confirm-cancel-modal/confirm-cancel-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Inheritance';

  constructor(public dialog: MatDialog) {}

  config = new BaseModal({
    CancelText:"Aldrig",
    ConfirmText:"Alltid"
  });

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmCancelModalComponent);
    let instance = dialogRef.componentInstance;
    instance.config = this.config;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}