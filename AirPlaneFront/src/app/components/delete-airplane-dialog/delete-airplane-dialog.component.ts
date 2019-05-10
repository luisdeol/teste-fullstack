import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-airplane-dialog',
  templateUrl: './delete-airplane-dialog.component.html',
  styleUrls: ['./delete-airplane-dialog.component.less']
})
export class DeleteAirplaneDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteAirplaneDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

  // onNoClick() {
  //   this.dialogRef.close(false);
  // }

  // onYesClick() {
  //   this.dialogRef.close(true);
  // }
}
