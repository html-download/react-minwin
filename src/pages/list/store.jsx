import Constants from './constant';
import { createStore } from 'redux';

const initialState ={
	
	restaurants:[],
	filterRestaurant:[],
	checkbox_id:[]

}

const reducer = (state = initialState, action) =>{
	
	if(action.type === Constants.DATAFETCH){

		//console.log("{ ...state, restaurants: action.restaurants}", { ...state, restaurants: action.restaurants});
		return { ...state, restaurants: action.restaurants};
	}

		if(action.type === Constants.FILTERDATA){
				//console.log("checkbox_id", state.checkbox_id);

		return { ...state, filterRestaurant: state.filterRestaurant.concat({id:action.restaurants}),
			checkbox_id: state.checkbox_id.concat({id:action.checkvalue_id})};
			
	}

	return state
}


const store = createStore(reducer, initialState);
console.log('store', store.getState())
export default store;