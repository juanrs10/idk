import { Component, OnInit } from '@angular/core';
import { Conferencia } from '../conferencia';
import { ConferenciaService } from '../conferencia.service';
import { ConferenciaDetail } from '../conferenciaDetail';

@Component({
  selector: 'app-conferencia-list',
  templateUrl: './conferencia-list.component.html',
  styleUrls: ['./conferencia-list.component.css']
})
export class ConferenciaListComponent implements OnInit {

  selected: boolean = false; 

  conferencias: Array<ConferenciaDetail> = [];
  selectedConferencia!:ConferenciaDetail; 

  constructor(private conferenciaService:ConferenciaService) { }

  getConferencias() {
    this.conferenciaService.getConferencias().subscribe((conferencias) => {
      // Filtramos las conferencias para obtener solo las futuras
      this.conferencias = conferencias.filter(conferencia => {
        // Asumimos que tu objeto conferencia tiene una propiedad fecha que es una cadena de fecha ISO
        const fechaConferencia = new Date(conferencia.starts);
        const fechaActual = new Date();
        return fechaConferencia > fechaActual;
      });

      console.log(this.conferencias);
    })
  }

  showDetail(conferenciaDetail: ConferenciaDetail){

    this.selectedConferencia = conferenciaDetail;
    this.selected = true;

  }

  ngOnInit() {

    this.getConferencias();


  }

}
