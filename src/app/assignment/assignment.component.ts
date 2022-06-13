import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor() { }
  qty: number;
  amount: number= 10;
  ngOnInit(): void {
  }

  quantity(qty: any) {
    this.qty = qty;
  }


  showAmount() {
    if (this.qty >= 0) {
      return this.qty*10;  
    }
    return 0; 
  }
  onIncrement(){
    this.qty = +this.qty + 1;
    this.totalAmount();

  }
  onDecrement(){
    this.qty = this.qty - 1;
    this.totalAmount();
  }

  totalAmount(){
    this.amount = this.qty * 10;
    this.showAmount();
  }
  
}
