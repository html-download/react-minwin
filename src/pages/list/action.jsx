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

     static filterprice(checkvalue, check_i_d, filterPrice){

         Store.dispatch({
             type: Constants.DATAPRICE,
             checkid: check_i_d,
             checkvalue: checkvalue,
            filterprice: filterPrice
         });
     }

       static sortres(checkvalue, sortrestaurant){

         Store.dispatch({
             type: Constants.DATASORT,
             checkvalue: checkvalue,
             sortrestaurant: sortrestaurant
         });
     }

}

export default Actions;
