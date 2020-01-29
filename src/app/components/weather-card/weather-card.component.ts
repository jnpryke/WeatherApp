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

  getWeatherIconPath(weatherDescription) {
    weatherDescription = weatherDescription.toLowerCase();
    let path = 'assets/img/';

    if (weatherDescription.includes('cloud')) {
      path += 'cloud.png';
    } else if (weatherDescription.includes('rain') || weatherDescription.includes('mist')) {
      path += 'rain.png';
    } else if (weatherDescription.includes('snow')) {
      path += 'snowflake.png';
    } else if (weatherDescription.includes('wind')) {
      path += 'wind.png';
    } else {
      path += 'sun.png';
    }

    return path;
  }
}
