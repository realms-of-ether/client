import { h, Component } from 'preact';
import Box from '../../components/box';
import CreateFortress from '../../components/createFortress';
import ButtonLink from '../../components/buttonLink';
import style from './style';

const Contract = require('./../../contract').default;

export default class Game extends Component {

    constructor() {
		super();

		this.state = {
            fortresses: {},
            resources: {},
            fortressesOwned: 0,
            fortressesAvailable: 0
		};
	}
    
    componentWillMount() {
        this.getFortressesFromBlockchain();
    }

    getFortressesFromBlockchain() {
        web3.eth.getAccounts((error, accounts) => {
            Contract.getIndexLength(accounts[0], (err, res) => {
                for (let i = 0; i < res.toNumber(); i++) {
                    Contract.getHashFromIndex(accounts[0], i, (err, hash) => {
                        if (hash.toString() === '0x0000000000000000000000000000000000000000000000000000000000000000') return;
                        Contract.getFortress(hash.toString(), (err, fortress) => {
                            const newState = {
                                ...this.state   
                            };
                            newState.fortresses[hash.toString()] = {
                                name: web3.toAscii(fortress[0]).replace(/\u0000/g, ''),
                                owner: fortress[1],
                                x: fortress[2].toNumber(),
                                y: fortress[3].toNumber(),
                                wins: fortress[4].toNumber(),
                            };
                            this.setState(newState);
                        });
                        Contract.getResources(hash.toString(), (err, resources) => {
                            const newState = {
                                ...this.state   
                            };
                            newState.resources[hash.toString()] = {
                                gold: resources[0].toNumber(),
                                stone: resources[1].toNumber(),
                                wood: resources[2].toNumber(),
                            };
                            this.setState(newState);
                        });
                    });
                }
            });
        });
        Contract.getFortressesAvailable((err, res) => {
            this.setState({
                ...this.state,
                fortressesAvailable: res.toNumber()
            });
        });
        Contract.getFortressCount((err, res) => {
            this.setState({
                ...this.state,
                fortressesOwned: res.toNumber()
            });
        });
    }

	render() {

        const f = [];

        for (var hash in this.state.fortresses) {
            let r = (
                <div />
            );

            if (this.state.resources[hash]) {
                r = (
                    <div>
                        {this.state.resources[hash].gold}
                        <img src='/assets/gold.png' alt='Gold' height="24" />
                        <br />
                        {this.state.resources[hash].stone}
                        <img src='/assets/stone.png' alt='Stone' height="24" />
                        <br />
                        {this.state.resources[hash].wood}
                        <img src='/assets/wood.png' alt='Wood' height="24" />
                    </div>
                );
            }

            f.push((
                <div className={style.fortress}>
                    <div className={style.window}>
                        <img src='/assets/castle.png' width="60" className={style.castle} />
                    </div>
                    <div className={style.resources}>
                        {r}
                    </div>
                    <div className={style.content}>
                        {this.state.fortresses[hash].name} ({this.state.fortresses[hash].x}/{this.state.fortresses[hash].y})<br /><br />
                        <ButtonLink to={'/fortress/' + hash}>Details</ButtonLink>
                    </div>
                    <div className={style.end} />
                </div>
            ));
        }

        if (f.length === 0) {
            f.push((
                <div>
                    There is no fortress assigned to your wallet :(
                </div>
            ));
        }

		return (
			<Box>
				<h1>Your Kingdom</h1>
                {f}
				<h1>Expand</h1>
                <div style="width: 95%; text-align: center; margin: 10px">
                    {this.state.fortressesOwned} / {this.state.fortressesAvailable + this.state.fortressesOwned} owned
                </div>
                <CreateFortress handle={this.getFortressesFromBlockchain.bind(this)} />
                <div style="width: 95%; text-align: center; margin: 10px">
                    or visit the auctions
                </div>
			</Box>
		);
	}
}
