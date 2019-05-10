import { AirplaneService } from './../../services/airplane.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Airplane } from 'src/app/model/airplane';

@Component({
  selector: 'app-airplane-details',
  templateUrl: './airplane-details.component.html',
  styleUrls: ['./airplane-details.component.less']
})
export class AirplaneDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private airplaneService: AirplaneService
  ) { }
  
  airPlane: Airplane;
  
  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        if (params['codigo']) {
          this.airplaneService.find(params['codigo'])
            .subscribe((airplane) => {
              this.airPlane = airplane;
            });
        }
      }
    )
  }

}
