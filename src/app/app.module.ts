import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ROOT_STORAGE_KEYS, ROOT_LOCAL_STORAGE_KEY } from './app.tokens';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './store/effects/weather.effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule, META_REDUCERS, MetaReducer } from '@ngrx/store';
import { LocalStorageService } from './services/local-storage.service';
import { reducers, metaReducers } from './store/reducers';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { MaterialModule } from './material-module';
import { StorageServiceModule } from 'angular-webstorage-service';
import { storageMetaReducer } from './store/meta-reducers/local-storage.meta-reducer';

// factory meta-reducer configuration function
export function getMetaReducers(saveKeys: string[], localStorageKey: string, storageService: LocalStorageService): MetaReducer<any> {
  return storageMetaReducer(saveKeys, localStorageKey, storageService);
}

@NgModule({
  declarations: [
    AppComponent,
    WeatherDisplayComponent,
    TopBarComponent,
    WeatherCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    StorageServiceModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([WeatherEffects]),
  ],
  providers: [
    { provide: ROOT_STORAGE_KEYS, useValue: ['tempUnit.tempUnit']},
    { provide: ROOT_LOCAL_STORAGE_KEY, useValue: '__app_storage__'},
    {
      provide: META_REDUCERS,
      deps: [ROOT_STORAGE_KEYS, ROOT_LOCAL_STORAGE_KEY, LocalStorageService],
      useFactory: getMetaReducers,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
