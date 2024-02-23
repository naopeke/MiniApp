import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professional } from '../models/professional';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  private url = 'http://localhost:3000/profesionales';

  public professional: Professional;
  public professionals: Professional[];

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Object>{
    return this.http.get(this.url);
  }

  public getOne(firstName: string, lastName: string):Observable<Object>{
    console.log(firstName);
    let urlWithParams = `${this.url}?firstName=${firstName}&lastName=${lastName}`;
    return this.http.get(urlWithParams);
  };

  public add(professional: Professional):Observable<Object>{
    console.log(professional);
    return this.http.post(this.url, professional);
  };

  public edit(professional:Professional):Observable<Object>{
    console.log(professional);
    return this.http.put(this.url, professional);
  };

  public delete(firstName: string):Observable<Object>{
    console.log(firstName);
    return this.http.delete(this.url, {body: {firstName}})
  };


}
