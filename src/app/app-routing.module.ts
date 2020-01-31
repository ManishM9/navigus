import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

import { HomeComponent } from './components/home/home.component';
import { FavComponent } from './components/fav/fav.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'favourite', component: FavComponent }
];

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }
