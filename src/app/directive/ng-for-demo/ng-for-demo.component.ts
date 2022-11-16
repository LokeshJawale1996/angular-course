import { Component, OnInit } from '@angular/core';
import { FRUITS } from 'src/app/data/fruits';

@Component({
  selector: 'app-ng-for-demo',
  templateUrl: './ng-for-demo.component.html',
  styleUrls: ['./ng-for-demo.component.css']
})
export class NgForDemoComponent implements OnInit {

  fruits=FRUITS;
  constructor() { }
  
  ngOnInit(): void {
  }

}
