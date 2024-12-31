import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './feature/page/page.component';

const routes: Routes = [
  { path: 'feature', component: PageComponent },
  { path: 'lazy-feature', loadChildren: () => import('./lazy-feature/lazy-feature.module').then(m => m.LazyFeatureModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }