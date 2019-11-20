import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Restaurantlist extends Component{

constructor(props){
	super(props);
	this.state = this.props
	console.log("this.props", this.props);
}
render(){
	 
	 const id = this.state.data.id;
	  const details = this.state.data

	 //console.log("id", id);
	


 return(

  <div className="list_box wow fadeInUp" key={`key_${this.state.id}`}>
						<div className="list_img">
							<Link to={{
								pathname:`/detail/${id}`,
								restaurant_data: details
							}} ><img src={this.state.data.image_url}/></Link>
						</div>
						<div className="list_info">
							<h4><Link to="/detail">{this.state.data.name}</Link></h4>
							<p>{this.state.data.address}</p>
							<i className="fa fa-heart">(4)</i>
						</div>
						<div className="rating">
							<p><span className="starbox small unchangeable"></span> (4.0)</p>
							<i className="green fa fa-circle"></i> 
							<i className="red fa fa-circle"></i>
						</div>
						<p className="sub_info"> 
							<span className="icon"> <i className="delivery"></i>Delivery fee : <b>SAR 2</b></span>
							<span className="icon"> <i className="basket"></i>Min Order : <b>SAR 100</b></span>
						</p>					
					</div>
  );				
 }
}

export default Restaurantlist;
