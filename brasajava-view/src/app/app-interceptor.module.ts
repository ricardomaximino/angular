import { Injectable, NgModule } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpEvent, HttpHandler, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clonedRequest = request.clone({headers: request.headers.set('Access-Control-Allow-Origin', 'http://localhost:4200/')});
        return next.handle(clonedRequest);
    }

}

@NgModule({
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}
     ]
})
export class AppIterceptorModule {}
