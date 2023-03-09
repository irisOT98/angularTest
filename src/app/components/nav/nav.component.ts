import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showMessage(): void {
    this.dialog.open(DialogElementsExampleDialog);
    //alert('Hello dark, welcome');
  }
}

@Component({
  selector: 'dialog-msgWelcome',
  templateUrl: 'dialog-msgWelcome.html'
})
export class DialogElementsExampleDialog {}
