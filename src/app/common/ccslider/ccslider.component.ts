import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-ccslider',
  templateUrl: './ccslider.component.html',
  styleUrls: ['./ccslider.component.css']
})
export class CcsliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    var owl = $('.cc_slider_img_section .owl-carousel');
			  owl.owlCarousel({
				  loop:true,
				  margin:0,
				  autoplay:false,
				  navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
				  items:1
				  
        });
        function setAnimation ( _elem, _InOut ) {
          var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          _elem.each ( function () {
            var $elem = $(this);
            var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );
  
            $elem.addClass($animationType).one(animationEndEvent, function () {
            $elem.removeClass($animationType);
            });
          });
          }
  
          owl.on('change.owl.carousel', function(event) {
            var $currentItem = $('.owl-item', owl).eq(event.item.index);
            var $elemsToanim = $currentItem.find("[data-animation-out]");
            setAnimation ($elemsToanim, 'out');
          });
  
          owl.on('changed.owl.carousel', function(event) {
  
            var $currentItem = $('.owl-item', owl).eq(event.item.index);
            var $elemsToanim = $currentItem.find("[data-animation-in]");
            setAnimation ($elemsToanim, 'in');
          })
  }

}
