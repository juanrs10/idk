import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Conferencia } from './conferencia';
import { ConferenciaDetail } from './conferenciaDetail';



@Injectable({
  providedIn: 'root'
})
export class ConferenciaService {

  private apiUrl= "https://gist.githubusercontent.com/k-garces/d2ea7b6ba0a5502a7856f10b1cd1e032/raw/47bcf9b71199defa5539bb8122ae2da01e721afe/conferences.json"

  constructor(private http: HttpClient) { }

  getConferencias(): Observable<ConferenciaDetail[]>{
    return this.http.get<ConferenciaDetail[]>(this.apiUrl);
  }

}
