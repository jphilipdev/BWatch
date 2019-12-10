import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Http {
  get<T>(url: string): Observable<T>
}

@Injectable({
  providedIn: 'root'
})

export class HttpService implements Http {
  constructor(private client: HttpClient) {
  }

  get<T>(url: string) {
    return this.client.get<T>(url);
      //.pipe(catchError(this.handleError<T>('GET', url, null)));
  }

  post<T>(url: string, body: T) {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.client.post(url, JSON.stringify(body), options);
      //.pipe(catchError(this.handleError<T>('POST', url, null)));
  }

  private handleError<T>(method: string, url: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${method} - ${url}: ${error}`);
      return of(result as T);
    }
  }
}
