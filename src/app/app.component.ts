import { Component, OnInit } from '@angular/core';
import { RolesService } from './services/roles.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <!-- Update the roles the user has -->
    <div class="roleUpdate">
      <h3>Update the roles the user has</h3>
      <form novalidate [formGroup]="roleForm">
        <label for="user">User:</label>
        <input name="user" id="user" type="checkbox" formControlName="user"/>
        <label for="author">Author:</label>
        <input name="author" id="author" type="checkbox" formControlName="author"/>
        <label for="admin">Admin:</label>
        <input name="admin" id="admin" type="checkbox" formControlName="admin"/>
      </form>
    </div>
    <!-- We add the directive to certain components and pass it the role the user needs to have before he can see it.
      If the user has the role, it will be added to the DOM, otherwise the element is not added. -->

    <!-- By prefixing our directive with an asterisk, we are using it as a template directive. This is syntactic sugar.
    The angular compiler will translate this:

    <app-normal-users-can-view *appHasRole="'user'"></app-normal-users-can-view>
    to this:
    <ng-template [appHasRole]="'user"">
      <app-normal-users-can-view></app-normal-users-can-view>
    </ng-template>

     This is useful since our appHasRole directive can inject the templateRef this way.
    -->
    <app-normal-users-can-view *appHasRole="'user'"></app-normal-users-can-view>
    <app-authors-can-view *appHasRole="'author'"></app-authors-can-view>
    <app-only-for-admins *appHasRole="'admin'"></app-only-for-admins>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  roleForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private rolesService: RolesService
  ) {
    this.roleForm = formBuilder.group({
      user: true,
      author: false,
      admin: false
    });
  }

  ngOnInit() {
    // Utility method to transform the array of roles to an array of strings
    // Fe: [{name: 'user'}, {name: 'author'}] -> ['user', 'author']
    const mapRoleArrayToStringArray = obj => {
      let roles: string[] = [];
      Object.keys(obj).forEach(key => {
        if (obj[key]) {
          roles = [...roles, key];
        }
      });
      return roles;
    };

    // Listen to the changes from the form and update the roles
    // the user has in the rolesService
    this.roleForm.valueChanges
      .pipe(map(mapRoleArrayToStringArray))
      .subscribe(roles => this.rolesService.update(roles));
  }
}
