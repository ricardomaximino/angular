import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';


import { CapoeiraMemberService } from '../services/capoeira-member.service';
import { CapoeiraMember } from './capoeira-member';
import { CommonError } from '../common/common-error';
import { CommonNotFoundError } from '../common/common-not-found-error';
import { LoggedUserService } from '../services/logged-user.service';
import { User } from '../common/common-user';

@Component({
    selector: 'app-capoeira-member',
    templateUrl: './capoeira-member.component.html',
    styleUrls: ['./capoeira-member.component.css']
})
export class CapoeiraMemberComponent implements OnInit {
    name = 'Ricardo Maximino';
    member: CapoeiraMember;
    members: CapoeiraMember[];
    user: User;
    constructor(private service: CapoeiraMemberService, private loggedUserService: LoggedUserService) {

    }

    ngOnInit() {
        this.loggedUserService.getUser().subscribe(user => {
            this.user = user;
        });
        this.service.getById(1)
            .subscribe(
                member => {
                    this.member = member.json();
                });
                this.getAll();
    }
    create(member) {
        this.service.create(member)
            .subscribe(
                response => {
                    this.member = member.json();
                },
                (error: CommonError) => {
                    if (error instanceof CommonNotFoundError) {
                        alert('Not Found Error');
                    } else {
                        Observable.throw(error);
                    }
                });
    }

    getAll() {
        this.service.getAll().subscribe(response => {
            this.members = response.json();
        });
    }

    log(x: NgForm) {
        console.log(x.dirty);
    }
}
