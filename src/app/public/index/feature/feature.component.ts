import { Component, OnInit } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
  animations: [

    trigger('listAnim', [
      transition('* => *', [
        query('.col-md-4', style({ opacity: 0, transform: 'translateX(-40px' })),

        query('.col-md-4', stagger('1000ms', [
          animate('1000ms 1.8s ease-in', style({ opacity: 1, transform: 'translateX(0)'}))
        ]))
      ])
    ])

  ]
})
export class FeatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
