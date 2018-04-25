import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity: 0,
        // backgroundColor: 'green',
        // transform: 'rotate3d(0,0,0,0deg)'
      })),
      state('final', style({
        opacity: 1,
        // backgroundColor: 'yellow',
        // transform: 'rotate3d(5,10,20,30deg)'
      })),
      transition('inicial => final', animate(2000)),
      transition('final => inicial', animate(1000))
    ])
  ]
})
export class LugaresComponent {
  title = 'PlatziSquare';
  lat = -0.3047468;
  lng = -78.5408702;
  lugares: any[];
  error: string;
  state = 'inicial';

  constructor(private lugaresService: LugaresService) {
    // this.lugares = lugaresService.getLugares();
    this.lugaresService.getLugares()
      .subscribe((lugares: any[]) => {
        // this.lugares = Object.keys(lugares).map(id => lugares[id]);
        // this.lugares = Object.entries(lugares);
        this.lugares = lugares;
        this.state = 'final';
      }, error => {
        this.error = `Estamos teniendo dificultades. ${error.status} (${error.statusText})`;
      });
  }

  animar() {
    this.state = (this.state === 'final') ? 'inicial' : 'final';
  }

  animacionInicia(event) {
    console.log('inicia');
    console.log(event);
  }

  animacionTermina(event) {
    console.log('termina');
    console.log(event);
  }
}
