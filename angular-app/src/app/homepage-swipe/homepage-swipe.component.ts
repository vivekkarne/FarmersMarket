import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import * as Hammer from 'hammerjs';

import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-homepage-swipe',
  templateUrl: './homepage-swipe.component.html',
  styleUrls: ['./homepage-swipe.component.css']
})
export class HomepageSwipeComponent implements OnInit {

  flag = false;

  json;
  new_limit_cards = []

    constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {

this.http.get("http://localhost:9000/products")
        .subscribe((data) => {
          this.json = data['products_info'];
          console.log("json: ", this.json)

          // get the result value
          // var json_string = localStorage.getItem("result")
          // var actual_json = JSON.parse(json_string)
          // var get_search_value = actual_json.result;

          // console.log("value to filter from: ", get_search_value)

          // for (var s = 0; s < this.json.length; s++) {
          //   var get_obj = this.json[s];
          //   if (get_obj.product_name == get_search_value) {
          //     this.new_limit_cards.push(this.json[s])
          //   }
          // }
          
    //       for (var x = 0; x < 10; x++) {
    //   this.new_limit_cards.push(this.json[x])
    // }
        })
    
    

    



    var tinderContainer = document.querySelector('.tinder');
    var allCards = document.querySelectorAll('.tinder--card');
    var nope = <HTMLElement>document.getElementById('nope');
    var love = <HTMLElement>document.getElementById('love');


    function initCards() {
  var newCards = document.querySelectorAll('.tinder--card:not(.removed)');

      newCards.forEach(function (card, index) {

        card.setAttribute
          ("style", `z-index: ${allCards.length-index}`)
        
        card.setAttribute
          ("style", `transform: ${'scale(' + (70 - index) / 70 + ') translateY(-' + 30 * index + 'px)'};`);

        
    // card.style.zIndex = allCards.length - index;
    // card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
        // card.style.opacity = (10 - index) / 10;
        

        card.setAttribute
          ("style",  `opacity: ${(70 - index)}`);
        
  });
  
  tinderContainer.classList.add('loaded');
}

initCards();

allCards.forEach(function (el) {
  var hammertime = new Hammer(el);

  hammertime.on('pan', function (event) {
    el.classList.add('moving');
  });

  hammertime.on('pan', function (event) {
    if (event.deltaX === 0) return;
    if (event.center.x === 0 && event.center.y === 0) return;

    tinderContainer.classList.toggle('tinder_love', event.deltaX > 0);
    tinderContainer.classList.toggle('tinder_nope', event.deltaX < 0);

    var xMulti = event.deltaX * 0.03;
    var yMulti = event.deltaY / 80;
    var rotate = xMulti * yMulti;

    event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
  });

  hammertime.on('panend', function (event) {
    el.classList.remove('moving');
    tinderContainer.classList.remove('tinder_love');
    tinderContainer.classList.remove('tinder_nope');

    var moveOutWidth = document.body.clientWidth;
    var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

    event.target.classList.toggle('removed', !keep);

    if (keep) {
      event.target.style.transform = '';
    } else {
      var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
      var toX = event.deltaX > 0 ? endX : -endX;
      var endY = Math.abs(event.velocityY) * moveOutWidth;
      var toY = event.deltaY > 0 ? endY : -endY;
      var xMulti = event.deltaX * 0.03;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti;

      event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
      initCards();
    }
  });
});

    function createButtonListener(love) {

      return function (event) {
    console.log("clicked")
    var cards = document.querySelectorAll('.tinder--card:not(.removed)');
    var moveOutWidth = document.body.clientWidth * 1.5;

    if (!cards.length) return false;

    var card = cards[cards.length - 1];

    card.classList.add('removed');

        if (love) {
      card.setAttribute
        ("style", `transform: ${'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)'}`);
      // card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
        } else {
      card.setAttribute
        ("style", `transform: ${'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)'}`);
      // card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
        }
        
    initCards();

    event.preventDefault();
  };
}

var nopeListener = createButtonListener(false);
var loveListener = createButtonListener(true);

nope.addEventListener('click', nopeListener);
love.addEventListener('click', loveListener);
  
  }

}
