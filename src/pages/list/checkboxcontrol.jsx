import React, {Component} from 'react';  
import {Container, Row, Col, Form, Label ,FormGroup , Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import PropTypes from 'prop-types'; 
import ClassName from 'classnames';

const Checkbox = (props) => {

  let groupClasses = ClassName(Object.assign({
    'form-group' : false
  }, props.groupClasses));

let lableClasses = ClassName(Object.assign({
    'checkbox' : true
  },props.labelClasses ));

  let inputClasses = ClassName(Object.assign({
    'checkbox' : true
  }), props.inputClasses)

    return( 
   
    <div className={groupClasses}>
      <input
              className={inputClasses}
              id = {props.name}
              name={props.name}
              onChange={props.onChange}
              value={props.option}
              checked={props.checked}
              type="checkbox" />
           <label htmlFor={props.name} className={lableClasses}>
            {props.title}

          </label>

     
         
 
    </div>
  
);

}

Checkbox.propTypes={
  title: PropTypes.string,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  options: PropTypes.array,
  onChange: PropTypes.func
};




export default Checkbox;