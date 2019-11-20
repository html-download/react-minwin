import Constants from './constant';
import Store from './store';
class Actions {

        static getapi(restaurants) {

        Store.dispatch({
            type: Constants.DATAFETCH,
            restaurants: restaurants
        });

    }
       static filterapi(checkvalue, checkid, filterCity) {

        Store.dispatch({
            type: Constants.DATAFILTER,
            checkid: checkid,
            checkvalue: checkvalue,
            filterCity: filterCity
        });

    } 

     static filterprice(checkvalue, checkid, filterprice){

         Store.dispatch({
             type: Constants.DATAPRICE,
             checkid: checkid,
            checkvalue: checkvalue,
            filterprice: filterprice
         })
     }

}

export default Actions;
