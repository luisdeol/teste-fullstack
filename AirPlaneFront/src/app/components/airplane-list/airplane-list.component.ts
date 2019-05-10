import { DeleteAirplaneDialogComponent } from './../delete-airplane-dialog/delete-airplane-dialog.component';
import { AirplaneService } from './../../services/airplane.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Airplane } from 'src/app/model/airplane';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-airplane-list',
  templateUrl: './airplane-list.component.html',
  styleUrls: ['./airplane-list.component.less'],
  entryComponents: [DeleteAirplaneDialogComponent],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AirplaneListComponent implements OnInit {
  airplanes = [];

  constructor(
    public router: Router,
    private dialog: MatDialog,
    private airplaneService: AirplaneService
  ) { }
    
  ngOnInit() {
    this.airplaneService.findAll()
      .subscribe(airplanes => {
        this.airplanes = airplanes;
      });
  }

  routeToForm() {
    this.router.navigate(['add']);
  }

  getDetails(codigo: string): void {
    this.router.navigate(['airplanes', codigo]);
  }

  update(airplane: Airplane, event: any): void {
    this.router.navigate(['form', airplane.codigo], {
      state: {
        airplane
      }
    });

    event.stopPropagation();
  }

  search(busca) {
    this.airplaneService.search(busca.value)
      .subscribe(results => {
        this.airplanes = results;
    });
  }

  delete(airplane: Airplane, event: any): void {
    const dialogRef = this.dialog.open(DeleteAirplaneDialogComponent, {
       data: {
         airplane
       }
     });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.airplaneService.delete(airplane.codigo)
          .subscribe(result => {
            const index = this.airplanes.indexOf(airplane);
            if (index > 0) {
              this.airplanes.splice(index, 1);
            }
          });
      }
    });

    event.stopPropagation();
  }
}
