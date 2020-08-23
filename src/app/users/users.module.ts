import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import {UserResolver} from './user-resolver.service';
import {UserFormComponent} from './user-form/user-form.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserFormComponent
  ],
  imports: [
    UsersRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UserResolver
  ]
})
export class UsersModule{}
