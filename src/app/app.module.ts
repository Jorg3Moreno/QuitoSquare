import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import {RouterModule, Routes} from '@angular/router';
import {DetalleComponent} from './detalle/detalle.component';
import {LugaresComponent} from './lugares/lugares.component';
import {ContactoComponent} from './contacto/contacto.component';
import {LugaresService} from './services/lugares.service';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {CrearComponent} from './crear/crear.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {HttpClientModule} from '@angular/common/http';
import {LinkifystrPipe} from './pipes/linkifystr.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthComponent} from './auth/auth.component';
import {RegisterComponent} from './register/register.component';
import {AuthService} from './services/auth.service';
import {GuardService} from './services/guard.service';
import {NgHttpLoaderModule} from 'ng-http-loader/ng-http-loader.module';

const appRoutes: Routes = [
  {
    path: '',
    component: LugaresComponent
  },
  {
    path: 'lugares',
    component: LugaresComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'crear/:id',
    component: CrearComponent,
    canActivate: [GuardService]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    AuthComponent,
    RegisterComponent,
    LinkifystrPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey // generated at google api
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireDatabaseModule,
    HttpClientModule,
    NgHttpLoaderModule,
    ReactiveFormsModule
  ],
  providers: [
    LugaresService,
    AuthService,
    GuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
