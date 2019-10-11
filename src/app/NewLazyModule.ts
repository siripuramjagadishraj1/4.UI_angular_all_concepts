
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './loggedin/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './loggedin/user-list/user-list.component';


const routes: Routes = [
    { path: 'dashBoard', component: DashboardComponent },
    { path: 'userList', component: UserListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent, UserListComponent]
})
export class CustomersModule { 

  constructor(){
    console.log('Hey Joga');
  }
}