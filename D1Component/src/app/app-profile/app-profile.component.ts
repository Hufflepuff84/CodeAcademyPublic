import { Component, OnInit } from '@angular/core';
import {user} from './user';

@Component({
  selector: 'app-profile',
  templateUrl: './app-profile.component.html',
  styleUrls: ['./app-profile.component.css']
})
export class AppProfileComponent implements OnInit {

  private user: any = user;
  constructor() { }

  ngOnInit() {

  }

}
