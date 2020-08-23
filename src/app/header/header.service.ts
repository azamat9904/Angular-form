import {Injectable} from '@angular/core';
import {NavItem} from '../shared/types';

@Injectable()
export class HeaderService{

  navItems: NavItem[] = [
    {
      content: 'Users',
      url: '/users',
      enabled: true,
    },
    {
      content: 'Home',
      url: '/home',
      enabled: true
    },
  ];


}
