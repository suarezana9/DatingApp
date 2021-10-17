import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void { }

  login() {
    this.accountService.login(this.model).subscribe(
      res => {
       this.router.navigate(['/members'])
      },
      err => {
        console.log(err, "error");
        this.toastrService.error(err.error);
      }
    )
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['/'])
  }
}
