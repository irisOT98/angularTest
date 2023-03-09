import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import { contactRegister, responseAPI } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  urlService: string = environment.access;

  constructor(private _http: HttpClient) { }

  register(obj: contactRegister): Observable<responseAPI> {
    return this._http.post<responseAPI>(this.urlService + 'contact/register/', obj);
  }
}
