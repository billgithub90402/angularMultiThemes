import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

interface Item {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  knives: Item[] = [
    {value: '0', viewValue: 'Miyabi'},
    {value: '1', viewValue: 'Wusthof'},
    {value: '2', viewValue: 'Shun'}
  ];

  brands: Item[] = [
    {value: '0', viewValue: 'Dior'},
    {value: '1', viewValue: 'Chanel'},
    {value: '2', viewValue: 'Gucci'}
  ];

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
  }

}
