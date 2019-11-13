import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import '.././media/css/style.css';
import '.././media/css/bootstrap.min.css';
import '.././media/css/font-awesome.min.css';
import '.././media/css/animate.min.css';

/*static components*/
import Header from './layouts/header/header.jsx';
import Footer from './layouts/footer/footer.jsx';

/*dynamic components*/
import Home from './home/home.jsx';
import Restaurant from './list/index.jsx';
import Detailpage from './detailpage/index.jsx';

const AppUniversal =  (
		
           <Router>
				<div>
				   <Header />
						<Switch>
							<Route path="/" exact component={Home}></Route>
							<Route path="/list" component={Restaurant}></Route>
							<Route path ="/detail/:id" component={Detailpage} ></Route>
							</Switch> 
						<Footer />
					</div>
				</Router> 		
	)
export default AppUniversal;