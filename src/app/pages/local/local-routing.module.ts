import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalDetailComponent } from './components/local-detail/local-detail.component';
import { LocalComponent } from './local.component';

const routes: Routes = [
  { path: "", component: LocalComponent },
  { path: ":idlocal", component: LocalDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalRoutingModule { }
