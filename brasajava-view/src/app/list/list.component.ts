import { Component, OnInit } from '@angular/core';
import { User } from '../common/common-user';
import { LoggedUserService } from '../services/logged-user.service';
import { Param } from '../common/common-param';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: Param[] = [
    new Param('keyOne', 'paramOne'),
    new Param('keyTwo', 'paramTwo'),
    new Param('keyThree', 'paramThree')
  ];
  paramIndex = 0;
  paramValue: string;
  name = 'Ricardo';
  user: User;
  constructor(
    private loggedUserService: LoggedUserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.loggedUserService.getUser().subscribe(user => {
      this.user = user;
    });

    // combine observables
    Observable.combineLatest([
      this.activatedRoute.paramMap,
      this.activatedRoute.queryParamMap
    ]).subscribe(combined => {
      console.log('Combine way to get required params: ' + combined[0].get('param'));
      console.log('Combine way to get query params: ');
      console.log(combined[1]);
      // this.server.getAllWithPagination(params.start,params.amount)
    });
  }

  removeAtBotton() {
    this.list.splice(this.list.length - 1, 1);
  }
  addAtBotton() {
    this.list.push(new Param(this.name, this.name));
  }
  addOnTop() {
    this.list.splice(0, 0, new Param(this.name, this.name));
  }
  removeOnTop() {
    this.list.splice(0, 1);
  }

  changeUserName() {
    this.loggedUserService.chageName(this.name);
  }

  sendQueryParamsHere() {
    this.router.navigate(['/list', 'sendingParamProgramatically'],
    {
      queryParams: {
        one: this.list[0].value,
        two: this.list[1].value,
        three: this.list[2].value
      }
    });
  }

  sendQueryParamsOut() {
    this.router.navigate(['/music'],
    {
      queryParams: {
        one: this.list[0].value,
        two: this.list[1].value,
        three: this.list[2].value
      }
    });
  }

  previous() {
    if (this.paramIndex === 0) {
      this.paramIndex = this.list.length - 1;
    } else {
      this.paramIndex--;
    }
    this.router.navigate(['/list', this.list[this.paramIndex].value]);
  }

  next() {
    if (this.paramIndex === this.list.length - 1) {
      this.paramIndex = 0;
    } else {
      this.paramIndex++;
    }
    this.router.navigate(['/list', this.list[this.paramIndex].value]);
  }

}
