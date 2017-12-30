import { h, Component } from 'preact';
import Box from '../../components/box';
import ButtonLink from '../../components/buttonLink';
import Button from '../../components/button';
import style from './style';

const Contract = require('./../../contract').default;

export default class Auction extends Component {

	constructor() {
		super();

		this.state = {
			userAuctions: {},
			auctions: {},
			page: 0,
			userPage: 0,
			user: ''
		}
	}

	componentWillMount() {
		this.getAuctions();
		this.getUserAuctions();
	}

	getAuctions() {
		Contract.getAuctionsLength((err, res) => {
			// pagination
			const itemsPerPage = 10;
			var limit = res.toNumber() - (itemsPerPage * (this.state.page + 1));
			if (limit < 0) limit = 0;
			for (let i = res.toNumber() - (itemsPerPage * (this.state.page)); i > limit; i--) {
				Contract.auctions((i - 1), (err, auctionHash) => {
					Contract.getFortress(auctionHash, (err, res) => {
						var newState = {
							...this.state,
							auctions: {
								...this.state.auctions,
							}
						};
						newState.auctions[auctionHash] = {
							...newState.auctions[auctionHash],
							name: web3.toAscii(res[0]).replace(/\u0000/g, ''),
							x: res[2].toNumber(),
							y: res[3].toNumber(),
							wins: res[4].toNumber(),
						}
						this.setState(newState);
					});
					Contract.highestBid(auctionHash, (err, res) => {
						var newState = {
							...this.state,
							auctions: {
								...this.state.auctions,
							},
							bids: {
								...this.state.bids,
							}
						};
						newState.auctions[auctionHash] = {
							...newState.auctions[auctionHash],
							highestBid: web3.fromWei(res.toNumber() / 99 * 100),
						}
						newState.bids[auctionHash] = parseFloat(web3.fromWei(res.toNumber() / 99 * 100)) + 0.1;
						this.setState(newState);
					});
					Contract.auctionEnd(auctionHash, (err, res) => {
						var newState = {
							...this.state,
							auctions: {
								...this.state.auctions,
							}
						};
						newState.auctions[auctionHash] = {
							...newState.auctions[auctionHash],
							auctionEnd: res.toNumber(),
						}
						this.setState(newState);
					});
				})
			}
		});
	}

	getUserAuctions() {
		web3.eth.getAccounts((error, accounts) => {
			this.setState({
				...this.state,
				user: accounts[0]
			});
			Contract.getUserAuctionsLength(accounts[0], (err, res) => {
				// pagination
				const itemsPerPage = 5;
				var limit = res.toNumber() - (itemsPerPage * (this.state.userPage + 1));
				if (limit < 0) limit = 0;
				for (let i = res.toNumber() - (itemsPerPage * (this.state.userPage)); i > limit; i--) {
					Contract.userAuctions(accounts[0], (i - 1), (err, auctionHash) => {
						Contract.getFortress(auctionHash, (err, res) => {
							var newState = {
								...this.state,
								userAuctions: {
									...this.state.userAuctions,
								}
							};
							newState.userAuctions[auctionHash] = {
								...newState.userAuctions[auctionHash],
								name: web3.toAscii(res[0]).replace(/\u0000/g, ''),
								x: res[2].toNumber(),
								y: res[3].toNumber(),
								wins: res[4].toNumber(),
							};
							this.setState(newState);
						});
						Contract.highestBid(auctionHash, (err, res) => {
							var newState = {
								...this.state,
								userAuctions: {
									...this.state.userAuctions,
								}
							};
							newState.userAuctions[auctionHash] = {
								...newState.userAuctions[auctionHash],
								highestBid: web3.fromWei(res.toNumber() / 99 * 100),
							};
							this.setState(newState);
						});
						Contract.highestBidder(auctionHash, (err, res) => {
							var newState = {
								...this.state,
								userAuctions: {
									...this.state.userAuctions,
								}
							};
							newState.userAuctions[auctionHash] = {
								...newState.userAuctions[auctionHash],
								highestBidder: res,
							};
							this.setState(newState);
						});
						Contract.auctionEnd(auctionHash, (err, res) => {
							var newState = {
								...this.state,
								userAuctions: {
									...this.state.userAuctions,
								}
							};
							newState.userAuctions[auctionHash] = {
								...newState.userAuctions[auctionHash],
								auctionEnd: res.toNumber(),
							};
							this.setState(newState);
						});
						Contract.getAuctionAmount(auctionHash, accounts[0], (err, res) => {
							var newState = {
								...this.state,
								userAuctions: {
									...this.state.userAuctions,
								}
							};
							newState.userAuctions[auctionHash] = {
								...newState.userAuctions[auctionHash],
								amount: web3.fromWei(res.toNumber()),
							};
							this.setState(newState);
						});
					});
				}
			});
		});
	}
	
	updateInputValue(auction, evt) {
		var newState = {
			...this.state,
			bids: {
				...this.state.bids,
			}
		};
		newState.bids[auction] = evt.target.value;
		this.setState(newState);
	}
	
	bid(auction) {
		Contract.bidAuction(auction, {
            value: web3.toWei(this.state.bids[auction])
        }, (err, res) => {
            if (!err) {
                
            }
        });
	}
	
	claim(auction) {
		Contract.endAuction(auction, (err, res) => {
            if (!err) {
                
            }
        });
	}
	
	withdraw(auction) {
		Contract.withdraw(auction, (err, res) => {
            if (!err) {
                
            }
        });
	}

	render() {

		const auctions = [];

		for (var hash in this.state.auctions) {

			var input = '';

			if (this.state.bids && this.state.bids[hash]) {
				input = (
					<input value={this.state.bids[hash]} onChange={this.updateInputValue.bind(this, hash)} className={style.input} />
				);
			}

			const auctionEnd = new Date(this.state.auctions[hash].auctionEnd * 1000);

			var actionButtons = '';
			if (Date.now() <= (this.state.auctions[hash].auctionEnd * 1000)) {
				actionButtons = (
					<div className={style.resources}>
						{input}
						<Button onClick={this.bid.bind(this, hash)}>
							Bid
						</Button>
						Steps in 0.1 ether<br />
						If already bid, it increases your bid
					</div>
				);
			}

			const auction = (
				<div className={style.fortress}>
					<div className={style.window}>
						<img src='/assets/castle.png' width="60" className={style.castle} />
					</div>
					{actionButtons}
					<div className={style.content}>
						{this.state.auctions[hash].name} ({this.state.auctions[hash].x}/{this.state.auctions[hash].y})<br />
						Highest bid: {this.state.auctions[hash].highestBid}<br />
						End:{auctionEnd.toLocaleDateString("en-US", {
							year: '2-digit',
							month: '2-digit',
							day: '2-digit',
							hour: '2-digit',
							minute: '2-digit'
						})}<br /><br />
						<ButtonLink to={'/fortress/' + hash}>Details</ButtonLink>
					</div>
					<div className={style.end} />
				</div>
			);

			auctions.push(auction);
		}
		
		const userAuctions = [];

		for (var hash in this.state.userAuctions) {
			
			var input = '';

			if (this.state.bids && this.state.bids[hash]) {
				input = (
					<input value={this.state.bids[hash]} onChange={this.updateInputValue.bind(this, hash)} className={style.input} />
				);
			}

			const auctionEnd = new Date(this.state.userAuctions[hash].auctionEnd * 1000);

			var actionButtons = '';
			if (Date.now() <= (this.state.userAuctions[hash].auctionEnd * 1000)) {
				actionButtons = (
					<div className={style.resources}>
						{input}
						<Button onClick={this.bid.bind(this, hash)}>
							Bid
						</Button>
						If already bid, it increases your bid
					</div>
				);
			} else {
				// show withdraw or claim button
				if (this.state.userAuctions[hash].highestBidder === this.state.user) {
					actionButtons = (
						<div className={style.resources}>
							<Button onClick={this.claim.bind(this, hash)}>
								Claim
							</Button>
							If this fails, increase gas limit
						</div>
					);
				} else {
					actionButtons = (
						<div className={style.resources}>
							Amount: {this.state.userAuctions[hash].amount} 
							<Button onClick={this.withdraw.bind(this, hash)}>
								Withdraw
							</Button>
							If this fails, increase gas limit
						</div>
					);
				}
			}

			const auction = (
				<div className={style.fortress}>
					<div className={style.window}>
						<img src='/assets/castle.png' width="60" className={style.castle} />
					</div>
					{actionButtons}
					<div className={style.content}>
						{this.state.userAuctions[hash].name} ({this.state.userAuctions[hash].x}/{this.state.userAuctions[hash].y})<br />
						Highest bid: {this.state.userAuctions[hash].highestBid}<br />
						End:{auctionEnd.toLocaleDateString("en-US", {
							year: '2-digit',
							month: '2-digit',
							day: '2-digit',
							hour: '2-digit',
							minute: '2-digit'
						})}<br /><br />
						<ButtonLink to={'/fortress/' + hash}>Details</ButtonLink>
					</div>
					<div className={style.end} />
				</div>
			);

			userAuctions.push(auction);
		}

		return (
			<Box>
				Caution! If you win your own auction, you can reclaim the fortress, but not the ether!<br />
				There is also a 1% fee!
				<h3>All Auctions</h3>
				{auctions}
				<h3>My Auctions</h3>
				{userAuctions}
			</Box>
		);
	}
}
