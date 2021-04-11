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
  locationThresh:number;
  modalFlag=false;
  productDetails:any;
  latitude:number;
  longitude:number;
  
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
  
  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          this.longitude = position.coords.longitude;
          this.latitude = position.coords.latitude;
          this.callApi();
        });
    } else {
       console.log("No support for geolocation")
    }
  }

  callApi(){
    const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${this.longitude}&lat=${this.latitude}`
    //Call API
	// console.log(url);
  }
  

  ngOnInit(): void {
  console.log("nggg "+this.cardList);
	/*this.srv.getProducts(this.priceThresh).subscribe(
      products => {
        this.cardList = products;
      },
      error => this.errorMessage = <any>error
    );*/
	this.cardList=this.srv.getSearchResults(this.priceThresh, this.locationThresh, this.latitude, this.longitude);
	this.getLocation();
  }
  
  updatePriceFilter(event){
  var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    this.priceThresh = target.value.slice(1,target.value.length);
	console.log(this.priceThresh);
	this.ngOnChanges();
	
  }
  
  updateLocationFilter(event){
	var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    this.locationThresh = target.value.slice(1,target.value.length);
	console.log(this.locationThresh);
	this.ngOnChanges();
	
  }

}
