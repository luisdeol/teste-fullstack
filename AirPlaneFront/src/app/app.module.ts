import { AirplaneService } from './services/airplane.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatFormField, MatFormFieldModule, MatListModule, MatDialogModule, MatCardModule, MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirplaneFormComponent } from './components/airplane-form/airplane-form.component';
import { AirplaneListComponent } from './components/airplane-list/airplane-list.component';
import { AirplaneDetailsComponent } from './components/airplane-details/airplane-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeleteAirplaneDialogComponent } from './components/delete-airplane-dialog/delete-airplane-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AirplaneFormComponent,
    AirplaneListComponent,
    AirplaneDetailsComponent,
    DeleteAirplaneDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AirplaneService],
  bootstrap: [AppComponent],
  entryComponents: [DeleteAirplaneDialogComponent]
})
export class AppModule { }
