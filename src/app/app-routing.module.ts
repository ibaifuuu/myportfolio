import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './components/presentation/presentation.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path:"", redirectTo:"/presentation", pathMatch: 'full'},
  { path: "presentation", component: PresentationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
