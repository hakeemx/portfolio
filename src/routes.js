import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Works from './pages/Works/Works';
import NotFound from './pages/NotFound/NotFound';

const Routes = (props) => (
	<Router {...props}>
		<App>
			<Switch>
				<Route path="/about" component={About}/>
				<Route path="/works" component={Works}/>
				<Route path="/contact" component={Contact}/>
				<Route path="*" component={NotFound}/>
			</Switch>
		</App>
	</Router>
);

export default Routes;