import {Component, OnInit} from '@angular/core';
import {HeaderService} from './header.service';
import {NavItem} from '../shared/types';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{
  navItems: NavItem[];
  isLoggedIn = false;

  constructor(
    private headerService: HeaderService,
    private authService: AuthService
    ) {}

  ngOnInit(): any{
    this.navItems = this.headerService.navItems;
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  onLogout(): any{
      this.authService.onLogout();
  }
}
