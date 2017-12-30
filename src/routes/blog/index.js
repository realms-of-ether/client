import { h, Component } from 'preact';
import Box from '../../components/box';
import style from './style';

export default class Blog extends Component {
	render() {
		return (
			<Box>
				<h1>Blog</h1>
				Coming soon...<br /><br />
				On this blog I will publish my experience developing and
				running smart contracts on the ethereum blockchain.
			</Box>
		);
	}
}
