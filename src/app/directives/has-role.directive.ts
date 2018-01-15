import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { RolesService } from '../services/roles.service';
import { map, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: string;

  stop$ = new Subject();

  isVisible = false;


  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private rolesService: RolesService
  ) {}

  ngOnInit() {
    this.rolesService.roles$.pipe(takeUntil(this.stop$)).subscribe(roles => {
      if (!roles) {
        this.viewContainerRef.clear();
      }
      if (roles.includes(this.appHasRole)) {
        if (!this.isVisible) {
          this.isVisible = true;
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
      } else {
        this.isVisible = false;
        this.viewContainerRef.clear();
      }
    });
  }
}
