import Constants from './constant';
import Store from './store';
class Actions {

        static getapi(restaurants) {

        Store.dispatch({
            type: Constants.DATAFETCH,
            restaurants: restaurants
        });

    }
           static filterapi(restaurants, id) {

        Store.dispatch({
            type: Constants.FILTERDATA,
            filterrestaurants: restaurants,
            checkvalue_id: id
          
        });

  		  }

}

export default Actions;