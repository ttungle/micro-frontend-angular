import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected readonly router = inject(Router);

  protected readonly menu = signal([
    {
      name: 'Home',
      path: '',
    },
    {
      name: 'About us',
      path: 'micro-frontend-1',
    },
    {
      name: 'Events',
      path: 'micro-frontend-2',
    },
  ]);

  onClick(menuItem: { name: string; path: string }): void {
    this.router.navigate([menuItem.path]);
  }
}
