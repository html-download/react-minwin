import Constants from './constant';
import Store from './store';
class Actions {

   static getapi(cusinielist) {

   		Store.dispatch({
   			type: Constants.FETCHCUSINIE,
   			cusinielist: cusinielist
   		});

   }

   static popup(modal) {

   		Store.dispatch({
   			type: Constants.MODALPOPUP,
   			modal: modal
   		});

   }

}

export default Actions;
