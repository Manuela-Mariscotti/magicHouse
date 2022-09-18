import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public document;

  constructor(@Inject(DOCUMENT) document: any) {
    this.document = document;
  }

  hrefIsCalendar(): boolean {
    return (
      this.document?.location.href.endsWith('/calendario') ||
      this.document?.location.href.endsWith('/nuevo-evento')
    );
  }
  hrefIsTasks(): boolean {
    return (
      this.document?.location.href.endsWith('/tareas') ||
      this.document?.location.href.endsWith('/nueva-tarea')
    );
  }
  hrefIsSpents(): boolean {
    return (
      this.document?.location.href.endsWith('/gastos') ||
      this.document?.location.href.endsWith('/nuevo-gasto') ||
      this.document?.location.href.endsWith('/nuevo-gasto')
    );
  }
  hrefIsHome(): boolean {
    return this.document?.location.href.endsWith('/');
  }
  hrefIsShopping(): boolean {
    return this.document?.location.href.endsWith('/lista-compra');
  }
  hrefIsLogin(): boolean {
    return this.document?.location.href.endsWith('/login');
  }

  ngOnInit(): void {}
}