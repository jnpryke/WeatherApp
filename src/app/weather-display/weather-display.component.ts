import { Component, OnInit } from '@angular/core';
import { from, asyncScheduler } from 'rxjs';
import { WeatherServiceService as WeatherService } from '../weather-service.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit {
  weather;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    this.weatherService.getCurrentDayWeather().then(data => {
      console.log(data);
      this.weather = data;
    });
  }

  convertToFarenheit(tempKelvin) {
    return Math.round(tempKelvin * (9 / 5) - 459.67);
  }
}
