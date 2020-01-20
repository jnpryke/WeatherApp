import { Component, OnInit } from '@angular/core';
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
    // this.weather = this.weatherService.getCurrentDayWeather();
    this.getWeatherData();
  }

  getWeatherData() {
    this.weatherService.getCurrentDayWeather().subscribe(data => {
      console.log(data);
      this.weather = data;
    });
  }

  convertToFarenheit(tempKelvin) {
    return Math.round(tempKelvin * (9 / 5) - 459.67);
  }
}
