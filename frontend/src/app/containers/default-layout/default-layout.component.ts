import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';


import { AuthenticationService } from '../../services';
import { navItems } from './../../_nav';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor(private router: Router, private authenticationService: AuthenticationService, private message: MessageService) {
    this.changes = new MutationObserver(mutations => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true,
    });
  }

  // public methods 界面语言切换
  public changeLanguage(message: string) {
    this.message.onLangChange();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
