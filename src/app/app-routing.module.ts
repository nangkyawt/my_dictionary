import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mydictionary',
    pathMatch: 'full',
  },
  {
    path: 'mydictionary',
    component: HomeComponent,
  },
  { path: 'details/:word', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
