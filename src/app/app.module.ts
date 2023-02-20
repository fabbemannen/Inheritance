import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseModalComponent } from './components/modals/base-modal.component';

import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmCancelModalComponent } from './components/modals/confirm-cancel-modal/confirm-cancel-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseModalComponent,
    ConfirmCancelModalComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
