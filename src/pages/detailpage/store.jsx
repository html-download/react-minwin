import Constants from './constant';
import { createStore } from 'redux';

const initialState ={
	
	cusiniedata:[],

}

const reducer = (state = initialState, action) =>{
	
	if(action.type === Constants.FETCHCUSINIE)
	{
		console.log("{ ...state, cusiniedata: action.cusinielist}", { ...state, cusiniedata: action.cusinielist});
		return {...state, cusiniedata: action.cusinielist}
	}	
		
}


const store = createStore(reducer, initialState);
console.log('store', store.getState())
export default store;
