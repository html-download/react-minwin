import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Header extends Component{
render(){

return(

<header className="site_header full_row">
	<div className="container animated fadeInDown">
		<div className="site_logo">
			<Link to ="/"><a><img src="images/logo.png" /></a> </Link>
			<a id="mobile_nav" className="mview"><i className="fa fa-bars"></i></a>
			<a className="lang">Arb</a>
			<a className="btn_close"><i className="fa fa-close"></i></a>
		</div> 
		
		<div className="site_menu">
			<nav className="full_row">
				<ul className="reset">
					<li> <Link to="/"><a>Home</a></Link> </li>
					<li> <a data-toggle="modal" data-target="#modal_login">Login</a> </li>
					<li> <a data-toggle="modal" data-target="#modal_register">Sign Up</a> </li>
					<li className="dropdown">
						<a className="acc_menu" data-toggle="dropdown">
							<span>My Account</span>
							<i className="fa fa-angle-down"></i>
						</a>
						<ul className="dropdown-menu">
							<li>
								<a href="profile.html" className="icon"><i className="edit"></i> Profile</a>
							</li>
							<li>
								<a href="address.html" className="icon"><i className="address"></i> Address</a>
							</li>
							<li>
								<a href="orders.html" className="icon"><i className="orders"></i> Orders</a>
							</li>
							<li>
								<a href="reviews.html" className="icon"><i className="review"></i> Rates & Reviews</a>
							</li>
							<li>
								<a href="loyalty-points.html" className="icon"><i className="loyalty"></i> My Loyalty Points</a>
							</li>
							<li>
								<a href="favourites.html" className="icon"><i className="fav"></i> Favourites</a>
							</li>
							<li>
								<a href="offers.html" className="icon"><i className="offers"></i> Offers</a>
							</li>
							<li><a className="icon logout"><i className="logout"></i> Logout</a></li>
						</ul>
					</li>
					<li> <a href="#" className="lang" data-toggle="tooltip" title="Language" data-placement="bottom">Arabic</a> </li>
				</ul>
			</nav>
		</div> 
	</div> 
</header> 
	)
  }
}

export default Header;