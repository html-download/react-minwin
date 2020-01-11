import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cusinielist extends Component{

constructor(props){
  super(props);
  this.state = this.props
  console.log("this.state.cusinedata", this.state.cusinedata);
}
render(){
   
   const cusine_detail =  this.state.cusinedata
   console.log("cusine_detail", cusine_detail);
 return(

        <div className="menu_list">
                            
                            <div className="img">
                              <a href="menu-detail.html">
                                <img src={cusine_detail.category_image} />
                              </a>
                            </div>
                            <h5>
                              <a href="menu-detail.html">{cusine_detail.category_name}</a>
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

export default Cusinielist;


