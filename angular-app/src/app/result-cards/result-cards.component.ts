import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { FetchServiceService } from '../fetch-service.service';

@Component({
  selector: 'app-result-cards',
  templateUrl: './result-cards.component.html',
  styleUrls: ['./result-cards.component.css']
})
export class ResultCardsComponent implements OnInit {
  
  priceThresh=0;
  cardList=[];
  
  constructor(private srv: FetchServiceService) { }
  
  ngOnChanges(){
	this.ngOnInit();
  }
  

  ngOnInit(): void {
	/*this.srv.getProducts(this.priceThresh).subscribe(
      products => {
        this.cardList = products;
      },
      error => this.errorMessage = <any>error
    );*/
	this.cardList=this.srv.getProducts(this.priceThresh);
  }
  
  updatePriceFilter(event){
  var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    this.priceThresh = target.value.slice(1,target.value.length);
	console.log(this.priceThresh);
	this.ngOnChanges();
	
  }

}
