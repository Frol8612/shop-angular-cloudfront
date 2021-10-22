import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotificationService } from '../notification.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorPrintInterceptor implements HttpInterceptor {
  constructor(private readonly notificationService: NotificationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        // eslint-disable-next-line rxjs/no-implicit-any-catch
        error: ({ status, error: { message } }) => {
          const url = new URL(request.url);
          const errorMessage = status === 401 || status === 403 
            ? `${status}: ${message}` 
            : `Request to "${url.pathname}" failed. Check the console for the details`;

          this.notificationService.showError(errorMessage, 0);
        },
      })
    );
  }
}
