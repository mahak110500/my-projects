import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent implements OnInit {
  @Input() onAmount: number;
 @Output() onqty= new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(qty:any){
    this.onqty.emit(qty);
  }

}
