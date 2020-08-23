import {Component, OnInit} from '@angular/core';
import {SidebarItem} from '../shared/types';
import {SidebarService} from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit{
  sidebarItems: SidebarItem[];
  constructor(private sidebarService: SidebarService) {
  }
  ngOnInit(): any{
    this.sidebarItems = this.sidebarService.sidebarItems;
  }
}
