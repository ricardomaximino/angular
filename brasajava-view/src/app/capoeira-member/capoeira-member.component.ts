import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/observable';

import { CapoeiraMemberService } from '../services/capoeira-member.service';
import { CapoeiraMember } from './capoeira-member';

@Component({
    selector: 'app-capoeira-member',
    templateUrl: './capoeira-member.component.html',
    styleUrls: ['./capoeira-member.component.css']
})
export class CapoeiraMemberComponent implements OnInit {
    name = 'Ricardo Maximino';
    member: CapoeiraMember;
    members: CapoeiraMember[];
    constructor(private service: CapoeiraMemberService) {

    }

    ngOnInit() {
        this.service.getById(1)
            .subscribe(
                member => {
                    this.member = member.json();
                });
    }
}
