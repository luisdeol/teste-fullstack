import { AirplaneDetailsComponent } from './components/airplane-details/airplane-details.component';
import { AirplaneFormComponent } from './components/airplane-form/airplane-form.component';
import { AirplaneListComponent } from './components/airplane-list/airplane-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: AirplaneListComponent
},
{
  path: 'add',
  component: AirplaneFormComponent
},
{
  path: 'form/:codigo',
  component: AirplaneFormComponent
},
{
  path: 'airplanes/:codigo',
  component: AirplaneDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
