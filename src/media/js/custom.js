//Animation
new WOW().init();

//Tooltip
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	$('[rel="tooltip"]').tooltip();
});

//floating_label
$(document).on('focus active', '.floating_label .form-control',function(){
	$('label[for='+$(this).attr('id')+']').addClass('focus');
});
$(document).on('blur', '.floating_label .form-control',function(){
	$('label[for='+$(this).attr('id')+']').removeClass('focus');
});

//Mobile filter
$(".filter").on('click', function(event) {
	$(".filter_sidebar").addClass('open');
	$(".mobile_bg").fadeIn();
});
$(".close_filter").on('click', function(event) {
	$(".filter_sidebar").removeClass('open');
	$(".mobile_bg").fadeOut();
});

//Current Page
$(document).ready(function() {
    $("[href]").each(function() {
    if (this.href == window.location.href) {
        $(this).addClass("current_page");
        }
    });
});

// Date Time Picker
$(".datepicker").datetimepicker({		
	minView: 2,
	format: "dd-M-yyyy",
	autoclose: true,
	showMeridian: true,
	todayBtn: false
});

$(".datetime").datetimepicker({		
	format: "dd-M-yyyy - HH:ii P",
	autoclose: true,
	showMeridian: true,
	todayBtn: false
});

//Select
var config = {
  '.chosen-select'           : {},
  '.chosen-select-deselect'  : {allow_single_deselect:true},
  '.chosen-select-no-single' : {disable_search_threshold:10},
  '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
  '.chosen-select1'           : {disable_search: true}
}
for (var selector in config) {
  $(selector).chosen(config[selector]);
}

//Modal
$(".modal_change").click(function(){
	$("body").addClass("modal_open");
});
$(".modal .close").click(function(){
	$("body").removeClass("modal_open");
});

//Mobile Menu
$("#mobile_nav").on('click', function() {
   $(".site_menu").fadeToggle();
   $(".site_menu").toggleClass("open");
   $(this).toggleClass("open");
   $("body").toggleClass("open");
});
$(".site_menu a, .site_menu").on('click', function() {
   $(".site_menu").fadeOut();
   $(".site_menu").removeClass("open");
   $("#mobile_nav").removeClass("open");
   $("body").removeClass("open");
});

//Mobile Filter
$(".btn_filter").on('click', function() {
   $("#filter").fadeIn().addClass("open");
   $("body").addClass("open");
   $("a.btn_close").show();
});

$(".btn_sort").on('click', function() {
   $("#sorting").fadeIn().addClass("open");
   $("body").addClass("open");
   $("a.btn_close").show();
});

$(".btn_category").on('click', function() {
   $("#menu_category").fadeIn().addClass("open");
   $("body").addClass("open");
   $("a.btn_close").show();
});

$(".btn_cart").on('click', function() {
   $("#mini_cart").fadeIn().addClass("open");
   $("body").addClass("open");
   $("a.btn_close").show();
});

$(".sidebar_submit, #mobile_nav, #menu_category, a.btn_close").on('click', function() {
   $("#filter").fadeOut().removeClass("open");
   $("#sorting").fadeOut().removeClass("open");
   $("#menu_category").fadeOut().removeClass("open");
   $("#mini_cart").fadeOut().removeClass("open");
   $("body").removeClass("open");
   $("a.btn_close").hide();
});

//Rating
jQuery(function() {
  jQuery('.starbox').each(function() {
	var starbox = jQuery(this);
	starbox.starbox({
	  average: starbox.attr('data-start-value'),
	  changeable: starbox.hasClass('unchangeable') ? false : starbox.hasClass('clickonce') ? 'once' : true,
	  ghosting: starbox.hasClass('ghosting'),
	  autoUpdateAverage: starbox.hasClass('autoupdate'),
	  buttons: starbox.hasClass('smooth') ? false : starbox.attr('data-button-count') || 5,
	  stars: starbox.attr('data-star-count') || 5
	}).bind('starbox-value-changed', function(event, value) {
	  if(starbox.hasClass('random')) {
		var val = Math.random();
		starbox.next().text('Random: '+val);
		return val;
	  } else {
		$('input[name="rating"]').val(value);
	  }
	}).bind('starbox-value-moved', function(event, value) {
	  $('input[name="rating"]').val(value);
	});
  });
});

//Placeholder
$(window).load(function(){
	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
		  var input = $(this);
		  if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		  }
		}).blur(function() {
		  var input = $(this);
		  if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		  }
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  $(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
			  input.val('');
			}
		  })
		});
	}
});


/*equal height*/
( function( $, window, document, undefined ){
	'use strict';
	var $list		= $( '.equal' ),
		$items		= $list.find( '.height' ),
		setHeights	= function()
	    {
			$items.css( 'height', 'auto' );
			var perRow = Math.floor( $list.width() / $items.width() );
			if( perRow == null || perRow < 2 ) return true;
			for( var i = 0, j = $items.length; i < j; i += perRow )
			{
				var maxHeight	= 0,
					$row		= $items.slice( i, i + perRow );

				$row.each( function()
				{
					var itemHeight = parseInt( $( this ).outerHeight() );
					if ( itemHeight > maxHeight ) maxHeight = itemHeight;
				});
				$row.css( 'height', maxHeight );
			}
		};	
	setHeights();
	$( window ).on( 'resize', setHeights );	
})( jQuery, window, document );

$('#carousel').owlCarousel({
    loop:false, margin:0, nav:true, dots:false, responsiveClass:true, navText: [ "<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>" ]
    , responsive:{ 0:{items:1}, 640:{items:1}, 641:{items:3}, 1024:{items:4}, 1300:{items:5} }
});

//Sticky Sidebar
/*
 Sticky-kit v1.1.2 | MIT | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var c,f;c=this.jQuery||window.jQuery;f=c(window);c.fn.stick_in_parent=function(b){var A,w,B,n,p,J,k,E,t,K,q,L;null==b&&(b={});t=b.sticky_class;B=b.inner_scrolling;E=b.recalc_every;k=b.parent;p=b.offset_top;n=b.spacer;w=b.bottoming;null==p&&(p=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=c(document);null==w&&(w=!0);J=function(a){var b;return window.getComputedStyle?(a=window.getComputedStyle(a[0]),b=parseFloat(a.getPropertyValue("width"))+parseFloat(a.getPropertyValue("margin-left"))+
parseFloat(a.getPropertyValue("margin-right")),"border-box"!==a.getPropertyValue("box-sizing")&&(b+=parseFloat(a.getPropertyValue("border-left-width"))+parseFloat(a.getPropertyValue("border-right-width"))+parseFloat(a.getPropertyValue("padding-left"))+parseFloat(a.getPropertyValue("padding-right"))),b):a.outerWidth(!0)};K=function(a,b,q,C,F,u,r,G){var v,H,m,D,I,d,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));if(!g.length)throw"failed to find stick parent";
v=m=!1;(h=null!=n?n&&a.closest(n):c("<div />"))&&h.css("position",a.css("position"));x=function(){var d,f,e;if(!G&&(I=A.height(),d=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),b=parseInt(g.css("padding-bottom"),10),q=g.offset().top+d+f,C=g.height(),m&&(v=m=!1,null==n&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-p,u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:J(a),
height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r,"position":"static"}),e))return l()};x();if(u!==C)return D=void 0,d=p,z=E,l=function(){var c,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+d>C+q,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:d}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,d=p,null==n&&("left"!==r&&"right"!==r||a.insertAfter(h),h.detach()),c={position:"",width:"",top:""},a.css(c).removeClass(t).trigger("sticky_kit:unstick")),
B&&(c=f.height(),u+p>c&&!v&&(d-=l,d=Math.max(c-u,d),d=Math.min(p,d),m&&a.css({top:d+"px"})))):e>F&&(m=!0,c={position:"fixed",top:d},c.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(c).addClass(t),null==n&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+d>C+q),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),a.css({position:"absolute",bottom:b,top:"auto"}).trigger("sticky_kit:bottom")},
y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);c(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==n&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",y),c(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,
0)}};q=0;for(L=this.length;q<L;q++)b=this[q],K(c(b));return this}}).call(this);

$(function() {
	return $("[data-sticky_column]").stick_in_parent({
		parent: "[data-sticky_parent]"
	});
});

//Menu Category
window.onload=function(){
// Cache selectors
var lastId,
    topMenu = $(".menu_category ul"),
    topMenuHeight = resize(),
	
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 1 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});
}


function resize() {
    if ($(window).width() < 1024) {
		var topMenuHeight = $(".menu_category ul").outerHeight()-44;
		return topMenuHeight;
    }
    else {
		var topMenuHeight = $(".menu_category ul").outerHeight()-215;
		return topMenuHeight;
	}
}
$(document).ready( function() {
    $(window).resize(resize);
    resize();
});