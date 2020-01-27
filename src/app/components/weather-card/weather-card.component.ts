import { Component, OnInit, OnChanges} from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherMainDescription;
  @Input() weatherDescription;
  @Input() weatherTemp;
  @Input() weatherTempMin;
  @Input() weatherTempMax;
  @Input() weatherLocation;

  constructor() {}

  ngOnInit() {}

  convertToFarenheit(tempKelvin) {
    return Math.round(tempKelvin * (9 / 5) - 459.67);
  }
}
