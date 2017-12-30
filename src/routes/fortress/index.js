import { h, Component } from 'preact';
import Box from '../../components/box';
import Button from '../../components/button';
import style from './style';

const Contract = require('./../../contract').default;

export default class Fortress extends Component {

	constructor() {
		super();

		this.state = {
			buildings: {},
			troups: {},
			fortress: {
				name: 'Loading...',
				hash: ''
			},
			account: ''
		}
	}

	componentWillMount() {
		web3.eth.getAccounts((error, accounts) => {
			this.setState({
				...this.state,
				account: accounts[0]
			});
		});

		// Buildings

		Contract.getBuildingIndexLength((err, indexLength) => {
			for (var i = 0; i < indexLength.toNumber(); i++) {
				Contract.getBuildingHash(i, (err, buildingHash) => {
					Contract.getBuilding(buildingHash, (err, building) => {
						const newState = {
							...this.state,
							buildings: {
								...this.state.buildings,
							}
						};
						newState.buildings[buildingHash] = {
							...this.state.buildings[buildingHash],
							name: web3.toAscii(building[0]).replace(/\u0000/g, ''),
							action: building[1].toNumber(),
							actionRate: building[2].toNumber(),
							actionValue: building[3],
							actionTimeout: building[4].toNumber()
						}
						this.setState(newState);
					});
				});
			}
		});

		// Troups

		Contract.getTroupIndexLength((err, indexLength) => {
			for (var i = 0; i < indexLength.toNumber(); i++) {
				Contract.getTroupHash(i, (err, troupHash) => {
					Contract.getTroup(troupHash, (err, troup) => {
						const newState = {
							...this.state,
							troups: {
								...this.state.troups,
							}
						};
						newState.troups[troupHash] = {
							...this.state.troups[troupHash],
							name: web3.toAscii(troup[0]).replace(/\u0000/g, ''),
							life: troup[1].toNumber(),
							strength: troup[1].toNumber(),
							intelligence: troup[1].toNumber(),
							dexterity: troup[1].toNumber(),
						}
						this.setState(newState);
					});

					Contract.getTroupCosts(troupHash, (err, troup) => {
						const newState = {
							...this.state,
							troups: {
								...this.state.troups,
							}
						};
						newState.troups[troupHash] = {
							...this.state.troups[troupHash],
							gold: troup[0].toNumber(),
							stone: troup[1].toNumber(),
							wood: troup[2].toNumber(),
						}
						this.setState(newState);
					});
				});
			}
		});
	}
	
	startAuction(fortressHash) {
		Contract.startAuction(fortressHash, (err, res) => {
			// listen to build event -> reload
		});
	}

	build(fortressHash, buildingHash) {
		Contract.build(fortressHash, buildingHash, (err, res) => {
			// listen to build event -> reload
		});
	}
	
	buildingAction(fortressHash, buildingHash) {
		Contract.buildingAction(fortressHash, buildingHash, (err, res) => {
			// listen to action event -> reload (set this.state.fortress.hash = '')??
		});
	}

	render({ fortressHash }) {

		if (this.state.fortress.hash !== fortressHash) {
			Contract.getFortress(fortressHash, (err, res) => {
				this.setState({
					...this.state,
					fortress: {
						...this.state.fortress,
						name: web3.toAscii(res[0]),
						owner: res[1],
						x: res[2].toNumber(),
						y: res[3].toNumber(),
						wins: res[4].toNumber(),
					}
				});
			});
			Contract.getResources(fortressHash, (err, res) => {
				this.setState({
					...this.state,
					fortress: {
						...this.state.fortress,
						gold: res[0].toNumber(),
						stone: res[1].toNumber(),
						wood: res[2].toNumber(),
					}
				});
			});

			// troups and building levels

			Contract.getBuildingIndexLength((err, indexLength) => {
				for (var i = 0; i < indexLength.toNumber(); i++) {
					Contract.getBuildingHash(i, (err, buildingHash) => {
						// building level
						Contract.getFortressBuilding(fortressHash, buildingHash, (err, building) => {
							const newState = {
								...this.state,
								buildings: {
									...this.state.buildings,
								}
							};
							newState.buildings[buildingHash] = {
								...this.state.buildings[buildingHash],
								level: building[0].toNumber(),
								timeout: building[1].toNumber()
							}
							this.setState(newState);

							// building costs
							Contract.getBuildingCosts(buildingHash, (err, costs) => {
								const newState = {
									...this.state,
									buildings: {
										...this.state.buildings,
									}
								};
								newState.buildings[buildingHash] = {
									...this.state.buildings[buildingHash],
									gold: costs[0].toNumber() * (building[0].toNumber() + 1),
									stone: costs[1].toNumber() * (building[0].toNumber() + 1),
									wood: costs[2].toNumber() * (building[0].toNumber() + 1),
								}
								this.setState(newState);
							});
						});
					});
				}
			});

			Contract.getTroupIndexLength((err, indexLength) => {
				for (var i = 0; i < indexLength.toNumber(); i++) {
					Contract.getTroupHash(i, (err, troupHash) => {
						Contract.getFortressTroups(fortressHash, troupHash, (err, troup) => {
							const newState = {
								...this.state,
								troups: {
									...this.state.troups,
								}
							};
							newState.troups[troupHash] = {
								...this.state.troups[troupHash],
								amount: troup.toNumber(),
							}
							this.setState(newState);
						});
					});
				}
			});

			this.setState({
				...this.state,
				fortress: {
					...this.state.fortress,
					hash: fortressHash
				}
			});
			return;
		}

		const buildings = [];

		for (var buildingHash in this.state.buildings) {
			// In the next contract update -> remove buildings, the following one is somehow broken
			if (buildingHash === '0x013fe665d081d447d18c02806c23234ff4e64e732fa7a5814abc87a0dac86737') {
				continue;
			}

			var {
				name,
				action,
				actionRate,
				actionValue,
				actionTimeout,
				level,
				timeout,
				gold,
				stone,
				wood
			} = this.state.buildings[buildingHash];

			var now = new Date();

			var mineButton = (
				<Button onClick={this.buildingAction.bind(this, fortressHash, buildingHash)}>
					{(action === 1) ? 'Mine' : 'Recrute'}
				</Button>
			);

			if (now < (timeout * 1000) || this.state.account !== this.state.fortress.owner) {
				mineButton = '';
			}

			var buildButton = (
				<Button onClick={this.build.bind(this, fortressHash, buildingHash)}>Build</Button>
			);

			if (this.state.account !== this.state.fortress.owner) {
				buildButton = '';
			}

			var troup = '';

			if (this.state.troups[actionValue] && level >= 0) {
				var troupGold = this.state.troups[actionValue].gold * (level + 1) * actionRate,
					troupStone = this.state.troups[actionValue].stone * (level + 1) * actionRate,
					troupWood = this.state.troups[actionValue].wood * (level + 1) * actionRate,
					troupAmount = (level + 1) * actionRate;

				troup = (
					<div className={style.troup}>
						<div className={style.window}>
							<img src={'/assets/troups/' + this.state.troups[actionValue].name + '.png'} width="60" className={style.castle} />
						</div>
						<div className={style.troupResources}>
							<div>
								Costs:<br />
								{troupGold}<img src='/assets/gold.png' alt='Gold' height="24" /><br />
								{troupStone}<img src='/assets/stone.png' alt='Stone' height="24" /><br />
								{troupWood}<img src='/assets/wood.png' alt='Wood' height="24" />
							</div>
						</div>
						<div className={style.content}>
							{this.state.troups[actionValue].name}<br /><br />
							Recruting {troupAmount} Troups<br />
							Available: {this.state.troups[actionValue].amount}
						</div>
						<div className={style.end} />
					</div>
				);
			}

			buildings.push((
				<div>
					<div className={style.fortress}>
						<div className={style.window}>
							<img src={'/assets/buildings/' + name + '.png'} width="60" className={style.castle} />
						</div>
						<div className={style.resources}>
							<div>
								{buildButton}
								{mineButton}
							</div>
						</div>
						<div className={style.content}>
							{name} (Level: {level})<br />
							Costs: {gold}<img src='/assets/gold.png' alt='Gold' height="24" />
							{stone}<img src='/assets/stone.png' alt='Stone' height="24" />
							{wood}<img src='/assets/wood.png' alt='Wood' height="24" /><br />
							{(action === 1) ? 'Mining' : 'Recruting'}: Every {actionTimeout} Hours<br />
						</div>
						<div className={style.end} />
					</div>
					{troup}
				</div>
			));
		}
		
		var auctionButton = (
			<Button onClick={this.startAuction.bind(this, fortressHash)}>Start auction</Button>
		);

		if (this.state.account !== this.state.fortress.owner) {
			auctionButton = '';
		}

		return (
			<Box>
				<h1>{this.state.fortress.name}</h1>
				<div className={style.fortress}>
                    <div className={style.window}>
                        <img src='/assets/castle.png' width="60" className={style.castle} />
                    </div>
                    <div className={style.resources}>
						<div>
							{this.state.fortress.gold}
							<img src='/assets/gold.png' alt='Gold' height="24" />
							<br />
							{this.state.fortress.stone}
							<img src='/assets/stone.png' alt='Stone' height="24" />
							<br />
							{this.state.fortress.wood}
							<img src='/assets/wood.png' alt='Wood' height="24" />
						</div>
                    </div>
                    <div className={style.content}>
						({this.state.fortress.x}/{this.state.fortress.y})<br /><br />
						{auctionButton}
                    </div>
                    <div className={style.end} />
                </div>
				<h3>Buildings</h3>
				{buildings}
			</Box>
		);
	}
}
