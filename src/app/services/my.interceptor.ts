import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {ToasterService} from 'angular2-toaster';

@Injectable()
export class MyInterceptor implements HttpInterceptor{
  constructor(private toasterService: ToasterService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).do(event => {
      if (event instanceof HttpResponse) {
        console.log(event);
        this.toasterService.popAsync('success', event.statusText, 'La llamada se realizó con éxito');
      }
    }, (error) => {
      console.log(error, error.statusText);
      this.toasterService.pop('error', error.statusText, error.message);
    });
  }
}
