import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularJSComponent } from '../../components/angularjs/angularjs.component';

const routes: Routes = [
  {
    path: '',
    component: AngularJSComponent,
    children: [
      {
        path: 'angularjs-spa',
        component: AngularJSComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularJSRoutingModule {}

export const angularjsRoutingComponents = [AngularJSComponent];
