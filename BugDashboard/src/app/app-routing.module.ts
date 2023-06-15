import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugdashboardComponent } from './bugdashboard/bugdashboard.component';
import { CreateBugComponent } from './create-bug/create-bug.component';

const routes: Routes = [
  {path: 'create-bug', component: CreateBugComponent},
  {path: '',component: BugdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
