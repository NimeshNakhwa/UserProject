import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/components/layout/landing/landing.component';

const routes: Routes = [
  {
    path:'',
    component: LandingComponent,
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then((m)=>m.AuthModule),
  },
  {
    path:'dashboard',
    component: LandingComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
