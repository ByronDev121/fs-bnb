import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  navItems: Array<any> = [
    {
      name: 'Home',
      route: '/home'
    },
    {
      name: 'Users',
      route: '/users'
    },
    {
      name: 'Providers',
      route: '/service-providers'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigate(['/users']);
  }

  navTo(page) {
    this.router.navigate([page.route]);
  }

}
