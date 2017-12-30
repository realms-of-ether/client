import { h, Component } from 'preact';
import style from './style';
import { Link } from 'preact-router/match';

export default class Button extends Component {

	render() {
		return (
			<Link href={this.props.to} className={style.button}>
                {this.props.children}
            </Link>
		);
	}
}
