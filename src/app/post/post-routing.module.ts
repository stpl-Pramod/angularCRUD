import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'', redirectTo:'post/index', pathMatch:'full'},
  {path:'post/index', component:IndexComponent},
  {path:'post/create', component:CreateComponent},
  {path:'post/:id/view', component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
