import { h, Component } from 'preact';
import style from './style';

export default class Box extends Component {

	render() {
		return (
			<div className={style.box}>
				<div className={style.boxTop}>
					<div className={style.leftTop} />
					<div className={style.rightTop} />
					<div className={style.centerTop} />
				</div>
				<div className={style.boxContent}>
					<div className={style.leftCenter} />
					<div className={style.rightCenter} />
					<div className={style.content}>
						{this.props.children}
					</div>
				</div>
				<div className={style.boxBottom}>
					<div className={style.leftBottom} />
					<div className={style.rightBottom} />
					<div className={style.centerBottom} />
				</div>
			</div>
		);
	}
}
