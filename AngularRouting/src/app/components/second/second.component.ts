import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  id: string;
//queremos recivir el numero 8 que manda por url para eso necesitamos el ActivatedRoute, esto es un servicio que contiene info del ruteo que se hizo para
//llegar a este componente
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
