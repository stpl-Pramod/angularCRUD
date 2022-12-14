import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'', redirectTo:'post/index', pathMatch:'full'},
  {path:'post/index', component:IndexComponent},
  {path:'post/create', component:CreateComponent},
  {path:'post/view/:id', component:ViewComponent},
  {path:'post/update/:id', component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
