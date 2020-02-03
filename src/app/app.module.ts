import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './store/effects/weather.effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { MaterialModule } from './material-module';
import { ModalService } from './services/modal-service/modal-service.service'
import { ModalRef } from './services/modal-service/models/modal-ref.model'
import { ModalServiceModule } from './services/modal-service/modal-service.module'
import {  MyModalComponent } from './modal-simple/modal-simple.component'
import { LogService }
        from './log.service';
import { LogTestComponent }
  from './log-test/log-test.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDisplayComponent,
    TopBarComponent,
    WeatherCardComponent,
    MyModalComponent,
    LogTestComponent,
  ],
  entryComponents: [MyModalComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ModalServiceModule,
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
    {
      provide: ModalRef
    },
    ModalService,
    LogService,

],
  bootstrap: [AppComponent]
})

export class AppModule { }
