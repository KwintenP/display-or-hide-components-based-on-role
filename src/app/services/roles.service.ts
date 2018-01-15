import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { scan } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/do';
import {ReplaySubject} from 'rxjs/ReplaySubject';

export interface Role {
  name: string;
}

@Injectable()
export class RolesService {
  // A stream that exposes all the roles a user has
  roles$ = new ReplaySubject<string[]>(1);

  // We leverage this roleUpdates$ to be able to update the roles
  // This is for demonstration purposes only
  roleUpdates$ = new BehaviorSubject(['user']);

  constructor() {
    this.roleUpdates$
      .pipe(
        scan((acc, next) => next, [])
      )
      .subscribe(this.roles$);
  }

  update(roles) {
    this.roleUpdates$.next(roles);
  }
}
