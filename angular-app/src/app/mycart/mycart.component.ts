import { Component, OnInit } from '@angular/core';
import { FetchServiceService } from '../fetch-service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
cartList: any;
totalVal=0;
  constructor(private srv: FetchServiceService, private router: Router) { }
	
	
  ngOnInit(): void {
	this.cartList=this.srv.getCartList();
	for(var x in this.cartList){
		console.log(this.cartList[x]['price'])
		this.totalVal+=this.cartList[x]['price'];
	}
  }
  
  handlePayment(){
	this.srv.handlePayment();
	console.log("bef");
	this.router.navigate(['/successPay']);
  }

}
