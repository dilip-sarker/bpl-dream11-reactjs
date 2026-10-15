import dollarImage from '../../../assets/dollar_1.png';
import logoImage from '../../../assets/logo.png';

const Navbar = ({ coin }) => {
	return (
		<div className="navbar bg-base-100 shadow-sm container mx-auto">
			<div className="flex-1">
				{/* <a className="btn btn-ghost text-xl">BPL Dream 11</a> */}
				<img src={logoImage} alt="" />
			</div>
			<div className="flex-none">
				<button className="flex justify-between items-center gap-2">
					<img src={dollarImage} alt="" />
					{coin} Coins
				</button>
			</div>
		</div>
	);
};

export default Navbar;
