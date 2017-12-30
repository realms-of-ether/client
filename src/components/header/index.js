import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {

	render() {
		return (
			<header class={style.header}>
				<h1>Realms of Ether</h1>
				<nav>
					<Link activeClassName={style.active} href="/">Home</Link>
					<Link activeClassName={style.active} href="/game">Game</Link>
					<Link activeClassName={style.active} href="/auction">Auction</Link>
					<Link activeClassName={style.active} href="/blog">Blog</Link>
					<Link activeClassName={style.active} href="/credits">Credits</Link>
				</nav>
			</header>
		);
	}
}
