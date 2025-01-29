import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  protected readonly menuList = signal<any[]>([
    {
      name: 'Fast food',
      description: 'Lorem ipsum dolor sit amet,',
      subDescription: 'consectetur adipiscing elit.',
      image: 'http://localhost:4201/take-away-tacos.svg',
    },
    {
      name: 'Burgers',
      description: 'Lorem ipsum dolor sit amet,',
      subDescription: 'consectetur adipiscing elit.',
      image: 'http://localhost:4201/burger.svg',
    },
    {
      name: 'Pizza',
      description: 'Lorem ipsum dolor sit amet,',
      subDescription: 'consectetur adipiscing elit.',
      image: 'http://localhost:4201/pizza-slice.svg',
    },
    {
      name: 'Salads',
      description: 'Lorem ipsum dolor sit amet,',
      subDescription: 'consectetur adipiscing elit.',
      image: 'http://localhost:4201/salad-1.svg',
    },
    {
      name: 'Drinks',
      description: 'Lorem ipsum dolor sit amet,',
      subDescription: 'consectetur adipiscing elit.',
      image: 'http://localhost:4201/beer.svg',
    },
    {
      name: 'Sweets',
      description: 'Lorem ipsum dolor sit amet,',
      subDescription: 'consectetur adipiscing elit.',
      image: 'http://localhost:4201/cupcake.svg',
    },
  ]);
}
