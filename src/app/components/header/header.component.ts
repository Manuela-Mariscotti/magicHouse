import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public document;

  constructor(private router: Router, @Inject(DOCUMENT) document: any) {
    this.document = document;
  }

  navigate(where: string) {
    this.router.navigateByUrl(where);
  }

  hrefIsProfile(): boolean {
    return this.document?.location.href.endsWith('/perfil');
  }
  hrefIsSettings(): boolean {
    return this.document?.location.href.endsWith('/ajustes');
  }
  hrefIsLogin(): boolean {
    return this.document?.location.href.endsWith('/login');
  }

  ngOnInit(): void {}
}
