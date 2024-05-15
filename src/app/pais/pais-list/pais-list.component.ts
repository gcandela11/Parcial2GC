import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {
  @Input() paisMasAntiguo: any;

  constructor() { }

  ngOnInit() {
  }

}
