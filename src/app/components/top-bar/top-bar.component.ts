import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromRoot from '../../store/reducers/index';
import { Store, select } from '@ngrx/store';
import { getTemperature } from '../../store/actions/get-temperature-unit.actions';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  temperatureUnit$: Observable<string>;

  constructor(private store: Store<fromRoot.AppState>) {
    this.temperatureUnit$ = this.store.pipe(select(fromRoot.selectWeatherTemperatureUnit));
  }

  ngOnInit() { }

  changeTemperatureUnit() {
    // if (this.temperatureUnit$ === '&#8451;') {
    //   this.temperature = '&#8457;';

    // } else {
    //   this.temperature = '&#8451;';
    // }

    this.store.dispatch(getTemperature());
    console.log('hola senor');
  }
}
