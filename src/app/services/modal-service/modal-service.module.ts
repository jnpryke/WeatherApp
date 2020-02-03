import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalContainerComponent } from "../modal-service/components/modal-container/modal-container.components";
import { ModalService } from './modal-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalContainerComponent
  ],
  entryComponents: [
    ModalContainerComponent
  ]
})
export class ModalServiceModule {
  static forRoot() {
    return {
      ngModule: ModalServiceModule,
      providers: [
        ModalService
      ]
    }
  }
}