import { Injectable } from '@angular/core';
import { Airplane } from '../model/airplane';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AirplaneService {
  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar) { }
  baseUrl = environment.baseUrl;
  
  add(airplane: Airplane): void {
      this.httpClient.post(`${this.baseUrl}/airplanes`, airplane)
          .subscribe(() => {
              this.snackBar.open('Aviao adicionado com sucesso', 'x', {
                duration: 1000,
                panelClass: ['success-snackbar']
              });
          });
  }

  delete(codigo: string): Observable<any> {
      return this.httpClient.delete(`${this.baseUrl}/airplanes/${codigo}`);
  }

  find(codigo: string): Observable<Airplane> {
      return this.httpClient.get<Airplane>(`${this.baseUrl}/airplanes/${codigo}`);
  }

  search(query: string): Observable<Airplane[]> {
    return this.httpClient.get<Airplane[]>(`${this.baseUrl}/airplanes/buscar?query=${query}`);
  }

  findAll(): Observable<Airplane[]> {
    return this.httpClient.get<Airplane[]>(`${this.baseUrl}/airplanes`);
  }

  update(airplane: Airplane): void {
    this.httpClient.put(`${this.baseUrl}/airplanes`, airplane)
    .subscribe(() => {
      this.snackBar.open('Aviao atualizado com sucesso', 'x', {
        duration: 1000,
        panelClass: ['success-snackbar']
      });
    });
  }
}
