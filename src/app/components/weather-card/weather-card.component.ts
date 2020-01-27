import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  // @Input() public weatherMainDescription: Observable<string>;
  @Input() public weatherMainDescription;
  @Input() weatherDescription;
  @Input() weatherLocation;

  constructor() { }

  ngOnInit() {
    // this.weatherMainDescription.subscribe(data => data)
  }

}
