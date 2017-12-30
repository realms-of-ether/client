import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Game from '../routes/game';
import Credits from '../routes/credits';
import Blog from '../routes/blog';
import Auction from '../routes/auction';
import Fortress from '../routes/fortress';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Game path="/game/" />
					<Credits path="/credits/" />
					<Blog path="/blog/" />
					<Auction path="/auction/" />
					<Fortress path="/fortress/:fortressHash" />
				</Router>
				<div style="text-align: center; width: 100%">
					Contact: ethergames@protonmail.com
				</div>
			</div>
		);
	}
}
