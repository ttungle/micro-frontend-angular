import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  protected readonly menuList = signal<any[]>([
    {
      name: 'Starters',
      description: 'Lorem ipsum dolor sit amet,',
      subDescription: 'consectetur adipiscing elit.',
      image: '/starter5.jpg',
    },
    {
      name: 'Main Course',
      description: 'Lorem ipsum dolor sit amet,',
      subDescription: 'consectetur adipiscing elit.',
      image: '/duck.jpg',
    },
    {
      name: 'Salads',
      description: 'Lorem ipsum dolor sit amet,',
      subDescription: 'consectetur adipiscing elit.',
      image: '/salata.jpg',
    },
    {
      name: 'Drinks',
      description: 'Lorem ipsum dolor sit amet,',
      subDescription: 'consectetur adipiscing elit.',
      image: '/bauturi.jpg',
    },
    {
      name: 'Burgers',
      description: 'Lorem ipsum dolor sit amet,',
      subDescription: 'consectetur adipiscing elit.',
      image: '/burger2.jpg',
    },
    {
      name: 'One bites',
      description: 'Lorem ipsum dolor sit amet,',
      subDescription: 'consectetur adipiscing elit.',
      image: '/starter2.jpg',
    },
    {
      name: 'Pizza',
      description: 'Lorem ipsum dolor sit amet,',
      subDescription: 'consectetur adipiscing elit.',
      image: '/pizzaa.jpg',
    },
    {
      name: 'Sweets',
      description: 'Lorem ipsum dolor sit amet,',
      subDescription: 'consectetur adipiscing elit.',
      image: '/sweets2-1.jpg',
    },
  ]);
}
