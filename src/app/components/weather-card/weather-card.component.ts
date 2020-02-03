import { Component, OnInit, Inject} from '@angular/core';
import { Input } from '@angular/core';

import { ModalService } from '../../services/modal-service/modal-service.service';
import { ModalRef } from '../../services/modal-service/models/modal-ref.model';
import { MyModalComponent } from '../../modal-simple/modal-simple.component';
import { style } from '@angular/animations';
import { LogTestComponent } from '../../log-test/log-test.component'
import { LogService } from '../../log.service'
import { logger } from 'src/app/store/reducers';

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
  @Input() weatherAttire;

  constructor(
    private modalService: ModalService,
    private logger: LogService
  ) {}

  ngOnInit() {
  }

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

  capitalizeEachWord(words) {
    return words.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
  }


  onCreateModal(): void {
    const modalRef = this.modalService.open(MyModalComponent, { title: 'My dynamic title', message: 'My dynamic message'});
    let values = ["1", "ANDREW", "KING"];
    this.logger.warn("HOLY SHIT!",
                 "WARNING YOUR COMPUTER IS ON FIRE", values);


    modalRef.onResult().subscribe(
      closed => console.log('closed', closed),
      dismissed => console.log('dismissed', dismissed),
      () => console.log('completed')
    );
  }
}
