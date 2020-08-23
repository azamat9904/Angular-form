import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserResolver } from './user-resolver.service';
import { UserFormComponent } from './user-form/user-form.component';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: ':id',
    component: UserComponent,
    resolve: {
      user: UserResolver
    }
  },
  {
    path: 'edit/:id',
    component: UserFormComponent,
    resolve: {
      userDetail: UserResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule{}
