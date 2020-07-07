import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-what',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.scss']
})
export class WhatComponent{

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

}
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}