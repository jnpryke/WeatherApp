import { Component, OnInit, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { temperatureKey } from '../../../environments/local_storage_keys';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  temperature;
  icon = '&#' + 8451 + ';';

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    this.getTemperatureFromLocalStorage();
  }

  getTemperatureFromLocalStorage(): void {
    this.temperature = this.storage.get(temperatureKey.key);
    console.log(this.temperature);
  }

  saveTemperatureToLocalStorage(value) {
    this.storage.set(temperatureKey.key, value);
  }

  changeTemperatureUnit() {
    if (this.temperature === '&#8451;') {
      this.temperature = '&#8457;';

    } else {
      this.temperature = '&#8451;';
    }
    this.saveTemperatureToLocalStorage(this.temperature);
  }
}
