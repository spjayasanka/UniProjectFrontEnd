import { Injectable } from '@angular/core';
import {Designer} from '../dto/Designer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignerService {

  constructor(private http: HttpClient) { }

  saveDesigner(designer: Designer): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8080/api/saveDesigner', designer);
  }
}
