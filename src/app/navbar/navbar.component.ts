import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private sessionService: SessionService) { }

  ngOnInit(): void {
  }
  logout() {
    this.sessionService.logout();
    this.router.navigate(['auth/login']);
  }
}
