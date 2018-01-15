import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnlyForAdminsComponent } from './components/only-for-admins/only-for-admins.component';
import { NormalUsersCanViewComponent } from './components/normal-users-can-view/normal-users-can-view.component';
import { AuthorsCanViewComponent } from './components/authors-can-view/authors-can-view.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RolesService } from './services/roles.service';
import { HasRoleDirective } from './directives/has-role.directive';

@NgModule({
  declarations: [
    AppComponent,
    OnlyForAdminsComponent,
    NormalUsersCanViewComponent,
    AuthorsCanViewComponent,
    HasRoleDirective,
  ],
  exports: [
    HasRoleDirective,
  ],
  imports: [BrowserModule, CommonModule, ReactiveFormsModule],
  providers: [RolesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
