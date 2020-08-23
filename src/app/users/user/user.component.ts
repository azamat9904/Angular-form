import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {User} from '../../shared/types';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  constructor(private route: ActivatedRoute){}
  user: User;

  ngOnInit(): void{
      this.route.data.subscribe((data: Data) => {
        this.user = data.user;
        console.log(this.user);
      });
  }
}
