import Constants from './constant';
import Store from './store';
class Actions {

        static getapi(restaurants) {

        Store.dispatch({
            type: Constants.DATAFETCH,
            restaurants: restaurants
        });

    }
       static filterapi(checkvalue, checkid) {

        Store.dispatch({
            type: Constants.DATAFILTER,
            checkid: checkid,
            checkvalue: checkvalue
        });

    }  

}

export default Actions;
