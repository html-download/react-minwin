import Constants from './constant';
import Store from './store';
class Actions {

   static getapi(cusinielist) {

   		Store.dispatch({
   			type: Constants.FETCHCUSINIE,
   			cusinielist: cusinielist
   		});

   }

}

export default Actions;
