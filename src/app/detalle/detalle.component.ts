import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LugaresService} from '../services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  id: string;
  lugar: any;

  constructor(private route: ActivatedRoute, private lugaresService: LugaresService) {
    // console.log(this.route.snapshot.params['id']); // debe coincidir con el que tenemos en app.module.ts "path: 'detalle/:id'"
    // this.id = this.route.snapshot.params['id'];
    // this.lugar = this.lugaresService.buscarLugar(this.id);
  }
}
