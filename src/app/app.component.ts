import { Component, OnInit } from '@angular/core';
import { MatomoInjector, MatomoTracker } from 'ngx-matomo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-starter';
  version = 'Angular version 9.1.9';

  constructor(
    private matomoInjector: MatomoInjector,
    private matomoTracker: MatomoTracker
  ) {
    this.matomoInjector.init('https://boopathy-git.matomo.cloud/', 1);
  }
  ngOnInit() {
    this.matomoTracker.setUserId('UserId');
    this.matomoTracker.setDocumentTitle('ngx-Matomo Test');
  }
}
