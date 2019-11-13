import React, { Component } from 'react';

import Store from './store';
import Actions from './action';

//components
import Restaurantlist from './_restaurantlist.jsx';

class Restaurant extends Component{
 constructor(props){
 	super(props);
 	this.state = Store.getState();
 	this.filterListItem =  this.filterListItem.bind(this);
 	
 }

 componentDidMount(){

 this.unsubscribeStore = Store.subscribe(this.onStoreChange.bind(this));

 		 fetch('https://opentable.herokuapp.com/api/restaurants?state=IL')
 		 .then((response) => response.json())
 		 .then((response) => {
                
         let restaurants = response.restaurants;
         Actions.getapi(restaurants);
        })


 }


componentWillUnmount() {
         this.unsubscribeStore();
 }

 onStoreChange() {

        this.setState(Store.getState());
 }

 getListItem(){
/*
var id = e ? e.target.id : null;
//check box is checked or not
// if (e && !e.target.checked) {
// 	id = null;
// }

var restaurants = this.state.filter_restaurants.length > 0 ? this.state.filter_restaurants.length : this.state.restaurants;
var displaylist = (restaurants && restaurants.length > 0) ?
  restaurants.filter((restaurant) => {  
         if (id) {
              return restaurant.city === id;
            }
                           		
            return true;

      }).map(function (restaurants) { 
        console.log("restaurants", restaurants);
        return <Restaurantlist  data={restaurants}/>
          }): null;
          //console.log("displaylist", displaylist);
			
          return displaylist;    */   

	console.log('stateee', this.state.restaurants);
 	const restaurant = this.state.restaurants;
 	console.log('restaurant', restaurant);

var restaurants = this.state.filterRestaurant.length > 0 ? 
this.state.filterRestaurant : this.state.restaurants;

    const displaylist = (restaurants && restaurants.length > 0) ? 
       restaurants.map((restaurants) => { 
                console.log('restaurantss', restaurants)
                return (<Restaurantlist {...this.state} data={restaurants}/>)
        }) : null;    

        return displaylist     
    }

  filterListItem(e){

   var id = (e && e.target.checked === true) || (e && !e.target.checked === false) ? e.target.id : null
   console.log("e.target.checked", e.target.checked);
   console.log("id", id);

		

  	//var filtereditem = this.state.filterRestaurant > 0 ? this.state.filterRestaurant :null
  	//var checkvalue =  e && e.target.checked === true ? e.target.id : null

  	//console.log('checkvalue', checkvalue);

 	console.log('this.state.checkbox_id', this.state.checkbox_id);
/* var cusine_id_value = (this.state.checkbox_id > 0 ) ?
  							this.state.checkbox_id.map((value) => {

  								if(value){

  									return value !== id
  								}

                               return 

  							}) : id*/

  	//console.log('cusine_id_value', cusine_id_value);


   var filterRes = (this.state.restaurants && this.state.restaurants.length > 0) ? 

       this.state.restaurants.filter((restaurants) => { 
                     if (id) {
						return restaurants.city === id
          				  }
          		  return id
               
        }) : null;    

		console.log('filterRes', filterRes);

	 var unchecked_cusine = (this.state.filterRestaurant && this.state.filterRestaurant.length > 0) ? 
	 

       this.state.filterRestaurant.filter((filterrestaurant) => { 
                     if (filterrestaurant.id !== filterRes.id) {
						return filterRes
          				  }
          		 		
               
        }) : filterRes;
       
       console.log("unchecked_cusine", unchecked_cusine);
       console.log("this.state.filterRestaurant", this.state.filterRestaurant);
		//Actions.filterapi(unchecked_cusine, id);

		Actions.filterapi(unchecked_cusine, id);


  	
  }  

 render(){
	
 console.log('this.state.selected_cusines', this.state.selected_cusines);
return(

 <div className="page_content full_row">
	<div className="container">
		<ul className="breadcrumb reset">
			<li><a href="#">Home</a></li>
			<li>Restaurents</li>
		</ul>
		<a href="map-view.html" className="map_view" data-toggle="tooltip" title="Map view" data-placement="left">
			<img src="images/map_view.png" />
		</a>
				<div className="full_row">
			<div className="row relative" data-sticky_parent>
				<div id="filter" className="col-sm-3 sticky sidebar_main" data-sticky_column>
					<div className="sidebar">
						<h4><a data-toggle="collapse" href="#filter_1">Cuisines</a></h4>
						<ul id="filter_1" className="reset collapse in show">
						
							<li>
								<input id="Chicago" type="checkbox" className="hide" onChange={(e)=> this.filterListItem(e)}/>
								<label for="Chicago" className="checkbox">Chicago</label>
							</li>
							<li>
								<input id="Wheeling" type="checkbox" className="hide" onChange={(e)=> this.filterListItem(e)} />
								<label for="Wheeling" className="checkbox">Indian</label>
							</li>
							<li>
								<input id="Rock Island" type="checkbox" className="hide" onChange={(e)=> this.filterListItem(e)}/>
								<label for="Rock Island" className="checkbox">Maxican</label>
							</li>
							<li>
								<input id="cb_American" type="checkbox" className="hide" />
								<label for="cb_American" className="checkbox">American</label>
							</li>
							<li>
								<input id="cb_Chinese" type="checkbox" className="hide" />
								<label for="cb_Chinese" className="checkbox">Chinese</label>
							</li>
							<li>
								<input id="cb_Desserts" type="checkbox" className="hide" />
								<label for="cb_Desserts" className="checkbox">Indian Desserts</label>
							</li>
							<li>
								<input id="cb_International" type="checkbox" className="hide" />
								<label for="cb_International" className="checkbox">International Desserts</label>
							</li>
							<li>
								<input id="cb_North" type="checkbox" className="hide" />
								<label for="cb_North" className="checkbox">North Indian</label>
							</li>
							<li>
								<input id="cb_Rajasthani" type="checkbox" className="hide" />
								<label for="cb_Rajasthani" className="checkbox">Rajasthani</label>
							</li>
							<li>
								<input id="cb_South" type="checkbox" className="hide" />
								<label for="cb_South" className="checkbox">South Indian</label>
							</li>
						</ul>
						

						<h4><a data-toggle="collapse" href="#filter_2">Price Range</a></h4>
						<ul id="filter_2" className="reset collapse in show">
							<li>
								<input id="price_2" type="checkbox" className="hide"/>
								<label for="price_2" className="checkbox">300</label>
							</li>
							<li>
								<input id="price_3" type="checkbox" className="hide"/>
								<label for="price_3" className="checkbox">1000</label>
							</li>
							<li>
								<input id="price_4" type="checkbox" className="hide"/>
								<label for="price_4" className="checkbox">1000</label>
							</li>
						</ul>

						<h4><a data-toggle="collapse" href="#filter_2">Food Type</a></h4>
						<ul id="filter_2" className="reset collapse in show">
							<li>
								<input id="cb_Veg" type="checkbox" className="hide"/>
								<label for="cb_Veg" className="checkbox">Veg</label>
							</li>
							<li>
								<input id="cb_NonVeg" type="checkbox" className="hide"/>
								<label for="cb_NonVeg" className="checkbox">Non Veg</label>
							</li>
						</ul>
						
						<h4><a data-toggle="collapse" href="#filter_3">Nearest</a></h4>
						<ul id="filter_3" className="reset collapse in show">
							<li>
								<input id="cb_15min" type="checkbox" className="hide"/>
								<label for="cb_15min" className="checkbox">0 - 15min</label>
							</li>
							<li>
								<input id="cb_30min" type="checkbox" className="hide"/>
								<label for="cb_30min" className="checkbox">15min - 30min</label>
							</li>
							<li>
								<input id="cb_40min" type="checkbox" className="hide"/>
								<label for="cb_40min" className="checkbox">30min - 40min</label>
							</li>
							<li>
								<input id="cb_60min" type="checkbox" className="hide"/>
								<label for="cb_60min" className="checkbox">45min - 60min</label>
							</li>
						</ul>
						
						<h4><a data-toggle="collapse" href="#filter_4">Delivery Type</a></h4>
						<ul id="filter_4" className="reset collapse in show">
							<li>
								<input id="cb_Company" type="checkbox" className="hide"/>
								<label for="cb_Company" className="checkbox">Company</label>
							</li>
							<li>
								<input id="cb_Vendor" type="checkbox" className="hide"/>
								<label for="cb_Vendor" className="checkbox">Vendor</label>
							</li>
						</ul>
						
						<h4><a data-toggle="collapse" href="#filter_5">Min.Order Value</a></h4>
						<ul id="filter_5" className="reset collapse in show">
							<li>
								<input id="cb_All" type="checkbox" className="hide"/>
								<label for="cb_All" className="checkbox">All</label>
							</li>
							<li>
								<input id="cb_100" type="checkbox" className="hide"/>
								<label for="cb_100" className="checkbox">Under 100</label>
							</li>
							<li>
								<input id="cb_200" type="checkbox" className="hide"/>
								<label for="cb_200" className="checkbox">Under 200</label>
							</li>
							<li>
								<input id="cb_300" type="checkbox" className="hide"/>
								<label for="cb_300" className="checkbox">Under 300</label>
							</li>
						</ul>
					</div>			
				</div>
				
				<div className="col-sm-6 listing" data-sticky_column>
					<form className="search_listing full_row">
						<input className="form-control" placeholder="Search" />
						<i className="fa fa-search"></i>
					</form>
					
					
					{ this.getListItem() }
					


					<div className="load_more full_row">
						<a className="btn line">Load More <i className="fa fa-spinner"></i></a>
					</div>
				</div> 
				
				<div id="sorting" className="col-sm-3 sidebar_main" data-sticky_column>
					<div className="sidebar">
						<h4><a data-toggle="collapse" href="#filter_type">Listing Type</a></h4>
						<ul id="filter_type" className="reset collapse in show">
							<li>
								<input id="cb_Restaurant" name="Type" type="radio" className="hide" checked/>
								<label for="cb_Restaurant" className="radio">Restaurant</label>
							</li>
							<li>
								<input id="cb_Truck" name="Type" type="radio" className="hide"/>
								<label for="cb_Truck" className="radio">Food Truck</label>
							</li>
						</ul>
						
						<h4><a data-toggle="collapse" href="#filter_sort">Sort By</a></h4>
						<ul id="filter_sort" className="reset collapse in show">
							<li>
								<input id="cb_Popularity" name="sort" type="radio" className="hide"/>
								<label for="cb_Popularity" className="radio">Popularity</label>
							</li>
							<li>
								<input id="cb_AZ" name="sort" type="radio" className="hide"/>
								<label for="cb_AZ" className="radio">A- Z</label>
							</li>
							<li>
								<input id="cb_Delivery" name="sort" type="radio" className="hide"/>
								<label for="cb_Delivery" className="radio">Fast Delivery</label>
							</li>
							<li>
								<input id="cb_Recommended" name="sort" type="radio" className="hide"/>
								<label for="cb_Recommended" className="radio">Recommended</label>
							</li>
							<li>
								<input id="cb_Ratings" name="sort" type="radio" className="hide"/>
								<label for="cb_Ratings" className="radio">Ratings</label>
							</li>
							<li>
								<input id="cb_New" name="sort" type="radio" className="hide"/>
								<label for="cb_New" className="radio">New</label>
							</li>
							<li>
								<input id="cb_Fee" name="sort" type="radio" className="hide"/>
								<label for="cb_Fee" className="radio">Delivery Fee</label>
							</li>
							<li>
								<input id="cb_Open" name="sort" type="radio" className="hide" />
								<label for="cb_Open" className="radio">Open</label>
							</li>
						</ul>						
					</div> 
				</div> 
			</div>
			
			<a className="sidebar_submit">Submit</a>
			<div className="mobile_option">
				<a className="btn_filter col-xs-4">Filter</a>
				<a className="btn_sort col-xs-4">Sorting</a>
				<a href="map-view.html" className="btn_map col-xs-4">Map View</a>
			</div>
		</div>
     </div> 
   </div>

	)
  }
}

export default Restaurant;