import Constants from './constant';
import { createStore } from 'redux';

const initialState ={
	
	restaurants:[],
	citydata:[], 
	filterCitydata:[],
	pricedata:[],
	filterpricedata:[],
	azsort:[],
	checkoutCity: ['Chicago','Wheeling','Rock IslandRock'],
	filterresult:[]

}

const reducer = (state = initialState, action) =>{
	
 if(action.type === Constants.DATAFETCH){
   //console.log("{ ...state, restaurants: action.restaurants}", { ...state, restaurants: action.restaurants});
	return { ...state, restaurants: action.restaurants};
  }

 

  if(action.type === Constants.DATAFILTER){
        if(action.checkvalue === true){
              return { ...state, citydata: state.citydata.concat(action.checkid),
                   filterCitydata: state.filterCitydata.concat(action.filterCity),
				}
            }
               else if(action.checkvalue === false) {
                   const valueToRemove = action.checkid
		 			return { ...state, citydata: state.citydata.filter(item => item !== valueToRemove),
		 				filterCitydata: state.filterCitydata.filter(item => item.city !== valueToRemove),
		 			}
			}
	  return { ...state, citydata: action.checkid}
    }

    if(action.type === Constants.DATAPRICE){
			if(action.checkvalue === true){
				
				return{...state, pricedata: state.pricedata.concat(action.checkid),
				 filterpricedata: state.filterpricedata.concat(action.filterprice)
				}
			}
			else if(action.checkvalue === false){
				 const valueToRemove = action.checkid
				return {...state, citydata: state.pricedata.filter(item => item !== valueToRemove),
				 filterpricedata: state.filterpricedata.filter(item => item.price !== valueToRemove) }
			}


    }

 if(action.type === Constants.DATASORT){
 	 console.log("...state, azsort: action.sortrestaurant ", {...state, azsort: action.sortrestaurant });
 	return{...state, azsort: action.sortrestaurant }

 	}

 	if(action.type === Constants.FILTERRESULT){
 		return{...state, filterresult: action.resresult}
 	}

	return state
}


const store = createStore(reducer, initialState);
console.log('store', store.getState())
export default store;
