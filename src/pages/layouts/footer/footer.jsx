import React, { Component } from 'react';

class Footer extends Component {
render(){
return(	
<footer class="site_footer full_row">
	<div class="footer_menu full_row">
		<div class="container">
			<ul class="reset">
				<li><a href="terms-conditions.html">Terms & Conditions</a></li>
				<li><a href="privacy-policy.html">Privacy Policy</a></li>
				<li><a href="about-us.html">About us</a></li>
				<li><a href="faq.html">FAQ</a></li>
				<li><a href="contact-us.html">Contact Us</a></li>
				<li><a href="driver-registration.html">Driver Registration</a></li>
				<li><a href="truck-registration.html">Food Truck Registration</a></li>
			</ul>
		</div> 
	</div> 
	
	<div class="container">
		<ul class="social_links full_row">
			<li>
				<a href="#" class="facebook wow zoomIn" target="_blank"></a>
			</li>
			<li>
				<a href="#" class="twitter wow zoomIn" target="_blank"></a>
			</li>
			<li>
				<a href="#" class="linkedin wow zoomIn" target="_blank"></a>
			</li>
			<li>
				<a href="#" class="instagram wow zoomIn" target="_blank"></a>
			</li>
			<li>
				<a href="#" class="gplus wow zoomIn" target="_blank"></a>
			</li>
		</ul> 
		
		<p class="mb0">&copy; Copyright Winmein 2017 | All Rights Reserved</p>
	</div> 
</footer>
		)
	}
}

export default Footer;