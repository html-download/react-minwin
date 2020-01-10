import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class cusinielist extends Component{

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

        <div className="menu_list">
                            
                            <div className="img">
                              <a href="menu-detail.html">
                                <img src="images/item_1.jpg" />
                              </a>
                            </div>
                            <h5>
                              <a href="menu-detail.html">Chilli Chicken</a>
                            </h5>
                            <p className="grey_text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris malesuada mollis risus, ut ultricies
                              nisl viverra.
                            </p>
                            <span className="price">SAR 50.00</span>
                            <a
                              data-toggle="modal"
                              data-target="#modal_ingredients"
                              className="btn"
                            >
                              <i className="fa fa-plus-circle" /> Add
                            </a>
       </div>
  );        
 }
}

export default cusinielist;


