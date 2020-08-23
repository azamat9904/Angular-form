import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

import {User} from '../../shared/types';
import {UserService} from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  users$: Observable<User[]>;
  searchStr = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

  onClick(id: number): void{
    this.router.navigate([id], {relativeTo: this.route});
  }
}
