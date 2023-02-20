import { Component } from '@angular/core';
import { BaseModal } from '../base-modal';
import { BaseModalComponent } from '../base-modal.component';

@Component({
  selector: 'app-confirm-cancel-modal',
  templateUrl: '../base-modal.component.html',
  styleUrls: ['../base-modal.component.css']
})
export class ConfirmCancelModalComponent extends BaseModalComponent {
  override isCancellable = true;
  override isAcceptable = true;
  override CancelText = "Nä";
  override ConfirmText = "Visst";

  //Better approach for dialogs?
  config: BaseModal = new BaseModal();
}
