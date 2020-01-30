import { Component, OnInit, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { temperatureKey } from '../environments/local_storage_keys';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weatherApp';

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }

  ngOnInit() {
    this.setDefaultTemperatureValueIfNone(temperatureKey.key);
  }

  setDefaultTemperatureValueIfNone(key) {
    if (!this.storage.get(key)) {
      console.log('key does not exist');
      this.storage.set(key, '&#8451;');
    } else {
      console.log('key exists');
    }
  }

}
