import { Component, OnInit, Input } from '@angular/core';
import { ConferenciaDetail } from '../conferenciaDetail';


@Component({
  selector: 'app-conferencia-detail',
  templateUrl: './conferencia-detail.component.html',
  styleUrls: ['./conferencia-detail.component.css']
})
export class ConferenciaDetailComponent implements OnInit {

  @Input() conferenciaDetail!: ConferenciaDetail;


  constructor() { }

  ngOnInit() {
  }

}
