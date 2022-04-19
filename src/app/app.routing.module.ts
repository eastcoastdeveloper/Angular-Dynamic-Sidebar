import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'angularjs-spa',
    loadChildren: () =>
      import('./modules/angularjs/angularjs.module').then(
        (m) => m.AngularJSModule
      ),
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
