import { Component } from '@angular/core';

import { Modal } from '../services/modal-service/models/modal.model';

@Component({
  template: `
    <div class="modal" style="  width:50%;
    position:fixed;
    top:25%;
    left:25%;
    z-index:100;
    background-color:#2196f3;
    text-align:start;">
      <div class="modal-header">
        <button type="button" class="close" style="background-color: #4CAF50; /* Green */
        border: solid;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px; border-radius: 8px;" (click)="cancel()">&times;</button>
        <h3>{{ title }}</h3>
      </div>
      <div class="modal-body">
        <p>{{ message }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" style="  background-color: #4CAF50; /* Green */
        border: solid;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px; border-radius: 8px;" (click)="cancel()">Cancel</button>
        <button type="button" class="btn btn-primary" style="  background-color: #4CAF50; /* Green */
        border: solid;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px; border-radius: 8px;" (click)="save()">Save</button>
      </div>
    </div>
  `
})
export class MyModalComponent extends Modal {

  title: string;
  message: string;

  onInjectInputs(inputs): void {
    this.title = inputs.title;
    this.message = inputs.message;
  }

  save(): void {
    this.close('saving');
  }

  cancel(): void {
    this.dismiss('canceling');
  }

}