import { h, Component } from 'preact';
import Box from '../../components/box';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<Box>
				<h1>Welcome to Realms of Ether</h1>
				<p>
					Realms of Ether is a game based on the Ethereum blockchain.
					Players can own fortresses, farm resources, create buildings
					and recrute troups.
				</p>
				<h1>FAQ</h1>
				<p>
					How many fortresses are available?<br /><br />
					The first limit is 1000. After some testing I will
					enable the minting feature, which releases a new
					fortress every 15 minutes.
				</p>
				<p>
					Is Realms of Ether open source?<br /><br />
					Yes! The source code can be found here:<br />
					<a href="https://github.com/realms-of-ether/">GitHub</a>
				</p>
				<p>
					What features to expect in the future?<br /><br />
					The design of the smart contracts allow upgrades
					to improve gameplay and add new features.<br />
					New troups and buildings can be added through the
					contracts interface.<br />
					A round based strategic fighting system is the next
					planned feature. Before implementing this, I want to
					discuss it with the players. Feel free to open an
					issue on GitHub containing your ideas and thoughts.
				</p>
			</Box>
		);
	}
}
