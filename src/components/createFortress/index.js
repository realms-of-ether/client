import { h, Component } from 'preact';
import style from './style';
import Button from './../button';

const Contract = require('./../../contract').default;

export default class CreateFortress extends Component {

    constructor() {
        super();

        this.state = {
            inputValue: ''
        };
    }

    componentWillMount() {
        web3.eth.getAccounts((error, accounts) => {
            Contract.LogFortressCreated({
                owner: accounts[0]
            }, () => {
                this.props.handle();
            });
        });
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }
    
    createFortressClick() {
        Contract.createFortress(this.state.inputValue, {
            value: web3.toWei(0.01)
        }, (err, res) => {
            if (!err) {
                
            }
        });

        this.setState({
            inputValue: ''
        });
    }
    

	render() {
		return (
			<div className={style.container}>
                Costs 0.01 Ether<br />
                <input value={this.state.inputValue} onChange={this.updateInputValue.bind(this)} className={style.input} maxlength="16" />
                <Button onClick={this.createFortressClick.bind(this)}>
                    Create
                </Button>
            </div>
		);
	}
}
