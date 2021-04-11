import { Component, OnInit, Input } from '@angular/core';
import { filter } from 'rxjs/operators';
import { FetchServiceService } from '../fetch-service.service';

@Component({
  selector: 'app-result-cards',
  templateUrl: './result-cards.component.html',
  styleUrls: ['./result-cards.component.css']
})
export class ResultCardsComponent implements OnInit {
  cardList: any;
  priceThresh=0;
  modalFlag=false;
  productDetails:any;
  
  constructor(private srv: FetchServiceService) { }
  
  ngOnChanges(){
	this.ngOnInit();
  }
  
  openModal(){
	this.productDetails=this.srv.getProductDetails();
	this.modalFlag=true;
  }
  
  addToCart(id){
  this.modalFlag=false;
	this.srv.addToCart(id);
  }
  
  
  

  ngOnInit(): void {
  console.log("nggg "+this.cardList);
	/*this.srv.getProducts(this.priceThresh).subscribe(
      products => {
        this.cardList = products;
      },
      error => this.errorMessage = <any>error
    );*/
	this.cardList=this.srv.getSearchResults(this.priceThresh);
  }
  
  updatePriceFilter(event){
  var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    this.priceThresh = target.value.slice(1,target.value.length);
	console.log(this.priceThresh);
	this.ngOnChanges();
	
  }

}
