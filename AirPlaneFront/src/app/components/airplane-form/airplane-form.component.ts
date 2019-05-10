import { ActivatedRoute } from '@angular/router';
import { Airplane } from './../../model/airplane';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AirplaneService } from 'src/app/services/airplane.service';

@Component({
  selector: 'app-airplane-form',
  templateUrl: './airplane-form.component.html',
  styleUrls: ['./airplane-form.component.less']
})
export class AirplaneFormComponent implements OnInit {
  airplaneGroup =  this.formBuilder.group({
      codigo: new FormControl('', [Validators.required]),
      modelo: new FormControl('', [Validators.required]),
      quantidadePassageiros: new FormControl(0, [Validators.required])
    });;
  
  airPlane: Airplane;
  update = false;
  
  constructor(
    private formBuilder: FormBuilder,
    public airplaneService: AirplaneService,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if (params['codigo']) {
          this.update = true;
          this.airplaneService.find(params['codigo'])
            .subscribe((airplane) => {
              this.fillAirplaneData(airplane);
              this.disable('codigo');
            });
        } else {
          this.update = false;
        }
      }
    )
  }

  fillAirplaneData(airplane: Airplane): void {
    this.codigo = airplane.codigo;
    this.modelo = airplane.modelo;
    this.quantidadePassageiros = airplane.quantidadePassageiros;
  }

  disable(value: string): void {
    this.airplaneGroup.get(value).disable();
  }

  submit(): void {
    const airplane = new Airplane(this.codigo, this.modelo, this.quantidadePassageiros);

    if (this.update) {
      this.airplaneService.update(airplane);
    } else {
      this.airplaneService.add(airplane);
    }
  }

  get codigo(): string {
    return this.airplaneGroup.get('codigo').value;
  }

  set codigo(value: string) {
    this.airplaneGroup.get('codigo').setValue(value);
  }

  get modelo(): string {
    return this.airplaneGroup.get('modelo').value;
  }

  set modelo(value: string) {
    this.airplaneGroup.get('modelo').setValue(value);
  }

  get quantidadePassageiros(): number {
    return this.airplaneGroup.get('quantidadePassageiros').value;
  }

  set quantidadePassageiros(value: number) {
    this.airplaneGroup.get('quantidadePassageiros').setValue(value);
  }
}
