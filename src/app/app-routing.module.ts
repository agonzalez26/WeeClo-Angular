import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: '', redirectTo:'index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo:'index', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
