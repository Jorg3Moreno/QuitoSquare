import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class LugaresService {

  constructor(private angularFirebaseDB: AngularFireDatabase, private http: HttpClient) {}

  public getLugares() {
    // request for firebase api in order to get lugares using sockets
    return this.angularFirebaseDB.list('lugares/').valueChanges();

    // request for firebase api in order to get lugares using http
    // return this.http.get(`${this.API_ENDPOINT}/.json`)
    //   .map((result: any) => {
    //     return result.lugares;
    //   });
  }

  public guardarLugar(lugar: any) {
    // sending to firebase database using sockets
    return this.angularFirebaseDB.database.ref(`lugares/${lugar.id}`).set(lugar);
    // sending to firebase database using http
    // const headers = new HttpHeaders({'Content-Type': 'application/json'});
    // return this.http.post(this.API_ENDPOINT + '/lugares.json', lugar, {headers: headers});
  }

  public editarLugar(lugar: any) {
    // sending to firebase database
    this.angularFirebaseDB.database.ref(`lugares/${lugar.id}`).set(lugar);
  }

  public obtenerGeoData(direccion) {
    // http://maps.google.com/maps/api/geocode/json?address=78-43+diagonal+70f,+Bogota,Colombia
    return this.http.get(`${environment.MAPS_ENDPOINT}${direccion}&key=${environment.googleMapsApiKey}`);
  }

  public getLugar(id) {
    return this.angularFirebaseDB.object(`lugares/${id}`).valueChanges();
    // return this.http.get(`${this.API_ENDPOINT}/lugares.json/${id}`);
  }
}
