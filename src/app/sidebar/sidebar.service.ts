import { Injectable } from '@angular/core';
import {SidebarItem} from '../shared/types';

@Injectable()
export class SidebarService{
  sidebarItems: SidebarItem[] = [
    {
      content: 'Home',
      url: '/home',
      enabled: true
    },
    {
      content: 'Products',
      url: '/products',
      enabled: true
    }
  ];
}
