import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Home extends Component{
render(){
return(
	<div>
	<div class="home_banner full_row">
		<div class="container">
			<h1 class="wow fadeInDown">Indulge your tastebuds with <b>MinWein</b></h1>
			<h2 class="wow fadeInDown">Our delivery service makes it easier for you to enjoy your favourite restaurants</h2>
			
			<form class="banner_form wow fadeInUp" action="listing.html">
				<div class="form-group map">
					<input type="text" class="form-control" placeholder="Enter your location" />
				</div>
				<div class="form-group cuisine">
					<input type="text" class="form-control" placeholder="Search for cuisine or food" />
				</div>
				<Link to="/list"><button id="search_btn" class="btn"></button></Link>
			</form> 
		</div> 
	</div>
	<div class="steps full_row">
		<div class="container">
		<div className="row">
			<div class="col-sm-3 wow fadeInUp">
				<img src={require('../../media/images/step_1.jpg')} />
				<span>1</span>
				<h3>Choose Location</h3>
			</div>
			<div class="col-sm-3 wow fadeInUp">
				<img src={require('../../media/images/step_2.jpg')} />
				<span>2</span>
				<h3>Choose Restaurant</h3>
			</div>
			<div class="col-sm-3 wow fadeInUp">
				<img src={require('../../media/images/step_3.jpg')} />
				<span>3</span>
				<h3>Choose Menu</h3>
			</div>
			<div class="col-sm-3 wow fadeInUp">
				<img src={require('../../media/images/step_4.jpg')} />
				<span>4</span>
				<h3>Order & Get Delivered</h3>
			</div>
			</div>
		</div>
	</div>	
	<div class="mobile_app full_row">
		<div class="container">
			<ul class="options reset">
				<li class="wow fadeInLeft">
					<i class="icon icon_1"></i>
					<h3>Register / Login</h3>
				</li>
				<li class="wow fadeInLeft">
					<i class="icon icon_2"></i>
					<h3>Restaurant Listing</h3>
				</li>
				<li class="wow fadeInLeft">
					<i class="icon icon_3"></i>
					<h3>Menu Listing</h3>
				</li>
			</ul>
			<div class="app_img">
				<p><img src={require('../../media/images/mobile_app.png')} class="wow fadeInUp"/></p>
				<p class="download">
					<a href="" target="_blank"><img src={require('../../media/images/appstore.png')} class="wow fadeInUp"/></a>
					<a href="" target="_blank"><img src={require('../../media/images/playstore.png')} class="wow fadeInUp"/></a>
				</p>
			</div>
			<ul class="options right reset">
				<li class="wow fadeInRight">
					<i class="icon icon_4"></i>
					<h3>My Cart</h3>
				</li>
				<li class="wow fadeInRight">
					<i class="icon icon_5"></i>
					<h3>Checkout</h3>
				</li>
				<li class="wow fadeInRight">
					<i class="icon icon_6"></i>
					<h3>Order Status</h3>
				</li>
			</ul>
	    </div> 
	  </div>
	</div>
	)
  }
}

export default Home;