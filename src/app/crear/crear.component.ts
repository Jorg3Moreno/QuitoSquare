import { Component } from '@angular/core';
import {LugaresService} from '../services/lugares.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
// import 'rxjs/Rx';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
  lugar: any;
  id: any;
  error: string;
  searchField: FormControl;
  results: Observable<any>;

  constructor(private lugaresService: LugaresService, private route: ActivatedRoute, private http: HttpClient) {
    this.lugar = {};
    this.id = this.route.snapshot.params['id'];
    if (this.id !== 'new') {
      this.lugaresService.getLugar(this.id)
        .subscribe((lugar) => {
          this.lugar = lugar;
        });
    }

    // verify using observable when searchField changes
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
      .delay(500)
      .switchMap((query) => {
        if (query !== '') {
          return this.http.get(`${environment.MAPS_ENDPOINT}${query}&key=${environment.googleMapsApiKey}`);
        } else {
          return [];
        }
      })
      .map((response: any) => response.results, error => console.log(error));
  }

  guardarLugar() {
    if (this.id !== 'new') {
      this.lugaresService.editarLugar(this.lugar);
      alert('Negocio editado con exito');
    } else {
      const direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
      this.lugaresService.obtenerGeoData(direccion)
        .subscribe((result: any) => {
          this.lugar.lat = result.results[0].geometry.location.lat;
          this.lugar.lng = result.results[0].geometry.location.lng;
          this.lugar.id = Date.now();
          this.lugaresService.guardarLugar(this.lugar)
            .then(() => {
              alert('Negocio guardado con exito');
              this.lugar = {};
            })
            .catch(error => {
              console.log(error);
              this.error = `Estamos teniendo dificultades. ${error.status} (${error.statusText})`;
            });
            // .subscribe(response => console.log(response), error => console.log(error));
        });
    }
  }

  onSelectGooglePlace(place: any) {
    this.lugar.calle = place.address_components[0].long_name;
    this.lugar.ciudad = place.address_components[2].long_name;
    this.lugar.pais = place.address_components[5].long_name;
  }
}
