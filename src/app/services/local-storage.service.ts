import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { temperatureKey } from '../../environments/local_storage_keys';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  getTemperatureUnitState()  {
    return this.storage.get(temperatureKey.key);
  }

  setTemperatureUnitState(value) {
    this.storage.set(temperatureKey.key, value);
  }
}
