import Constants from './constant';
import { createStore } from 'redux';

const initialState ={
	
	restaurants:[],
	citydata:[], 

}

const reducer = (state = initialState, action) =>{
	
	if(action.type === Constants.DATAFETCH){

		//console.log("{ ...state, restaurants: action.restaurants}", { ...state, restaurants: action.restaurants});
		return { ...state, restaurants: action.restaurants};
	}

		if(action.type === Constants.DATAFILTER){

			if(action.checkvalue === true){

				return { ...state, citydata: state.citydata.push(action.checkid) }

			}
			else if (state.citydata > 0){

				return { ...state, citydata: state.citydata.slice(action.checkid) }
			}
			return

	}


	return state
}


const store = createStore(reducer, initialState);
console.log('store', store.getState())
export default store;
