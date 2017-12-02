import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpEvent, HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // const clonedRequest = request.clone({headers: request.headers.append('Access-Control-Allow-Origin', 'http://localhost:8080/')});
        // console.log(clonedRequest);
        return next.handle(request);
    }

}

// @NgModule({
//     providers: [
//         {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}
//      ]
// })
// export class AppIterceptorModule {}
