import { NgModule } from '@angular/core';

import { HeaderService } from './header/header.service';
import { SidebarService } from './sidebar/sidebar.service';
import { UserService } from './users/user.service';

@NgModule({
  providers: [
    HeaderService,
    SidebarService,
    UserService
  ]
})
export class CoreModule{}
