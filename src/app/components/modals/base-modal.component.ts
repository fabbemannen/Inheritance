import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BaseModal } from './base-modal';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.css']
})
export class BaseModalComponent {
  @Input() isCancellable = false;
  @Input() isAcceptable = true;
  @Input() Header = "Title";
  @Input() Subheader = "";
  @Input() Content = "";
  @Input() CancelText = "Avbryt";
  @Input() ConfirmText = "OK";
}