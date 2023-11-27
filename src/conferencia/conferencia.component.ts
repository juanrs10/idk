import { Component, OnInit } from '@angular/core';
import { ConferenciaService } from './conferencia.service';
import { Observable } from 'rxjs';
import { Conferencia } from './conferencia';

@Component({
  selector: 'app-conferencia',
  templateUrl: './conferencia.component.html',
  styleUrls: ['./conferencia.component.css']
})
export class ConferenciaComponent implements OnInit {

  constructor(private conferenciaService:ConferenciaService) { }

  ngOnInit() {

  }

}
