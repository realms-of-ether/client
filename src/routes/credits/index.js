import { h, Component } from 'preact';
import Box from '../../components/box';
import style from './style';

export default class Credits extends Component {
	render() {
		return (
			<Box>
				<h1>Credits</h1>
				<p>Thanks to all people contributing to open knowledge/art/source.</p>
				<p>
					<b><u>Web App:</u></b><br />
					The web app was created using Preact CLI:<br />
					https://github.com/developit/preact-cli/
				</p>
				<p>
					<b><u>UI:</u></b><br />
					https://opengameart.org/content/rpg-gui-contstruction-kit-vmoon
				</p>
				<p>
					<b><u>Background:</u></b><br />
					https://opengameart.org/content/tower-defense-dirt-background
				</p>
				<p>
					<b><u>Dragons:</u></b><br />
					https://opengameart.org/content/rpg-enemies-11-dragons<br />
					Credit to: Stephen "Redshrike" Challener, MrBeast, Surt, Blarumyrran, Sharm, Zabin
				</p>
				<p>
					<b><u>Resources:</u></b><br />
					https://opengameart.org/content/resource-and-building-icons-unknown-horizons
					(CC BY-SA 3.0) by http://unknown-horizons.org/
				</p>
				<p>
					<b><u>Castle:</u></b><br />
					https://opengameart.org/content/western-european-castle-isometric-25d
				</p>
				<p>
					<b><u>Buildings:</u></b><br />
					https://opengameart.org/content/old-stone-buildings by blarumyrran@gmail.com
				</p>
			</Box>
		);
	}
}
