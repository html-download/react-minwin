 import React, { Component } from 'react';
 import { Link } from 'react-router-dom';

 class Cusinielist extends Component{

constructor(props){
   super(props);
  this.state = this.props
  console.log("stateama", this.state.cusinedata);
}

render(){
	
	const ingredient =  this.state;
  const title= this.state.cusinetitle
  console.log("title", title);
  console.log("ingredient", ingredient);


 return(

 		<div>
 				 <div className="menu_list">
                <h6>{title}</h6>
                            	<div>
                                {ingredient.cusinedata.category_name} 
                              </div>
                             <div className="img">
                               <a href="menu-detail.html">
                               <img src={ingredient.cusinedata.category_image}/>
                                    
                               </a>
                             </div>
                             <h5>
                             <a href="menu-detail.html"></a>

                             </h5>
                             <p className="grey_text">
                                   {ingredient.cusinedata.category_content}
                             </p>
                             <span className="price">SAR {ingredient.cusinedata.category_price}</span>

                             <a
                               data-toggle="modal"
                               data-target="#modal_ingredients"
                             className="btn"
                             >
                               <i className="fa fa-plus-circle" /> Add
                             </a>

                      </div>
 		</div>
  );				
 }
}

export default Cusinielist;


