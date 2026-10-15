import { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Player = ({
	player,
	setCoin,
	coin,
	selectedPlayers,
	setSelectedPlayers,
}) => {
	const {
		playerImg,
		playerName,
		playerType,
		playerCountry,
		battingStyle,
		bowlingStyle,
		price,
		rating,
	} = player;
	// console.log(player, setCoin);
	console.log();

	const [isSelected, setIsSelected] = useState(false);

	const handleChosePlayer = () => {
		if (coin >= price) {
			setCoin(coin - price);
		} else {
			toast.error('Not enough coin to purchase this player');
			return;
		}
		toast.success(`${playerName} is selected`);
		setIsSelected(!isSelected);
		setSelectedPlayers([...selectedPlayers, player]);
	};

	return (
		<div className="card bg-base-100 shadow-sm">
			<figure>
				<img src={playerImg} />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					<FaUser /> {playerName}
				</h2>
				<div className="flex justify-between gap-2 items-center">
					<div className="flex gap-2 items-center">
						<FaFlag />
						<p>{playerCountry}</p>
					</div>
					<button className="btn">{playerType}</button>
				</div>
				<div className="divider"></div>
				<h2 className="font-bold">Rating: {rating}</h2>
				<div className="flex justify-between gap-5 font-bold">
					<p>{battingStyle}</p>
					<p className="text-right">{bowlingStyle}</p>
				</div>

				<div className="card-actions justify-end">
					<p>Price: ${price}</p>
					<button
						onClick={handleChosePlayer}
						className={`${isSelected ? 'disabled' : ''} btn`}
						disabled={isSelected}
					>
						{isSelected ? 'Selected' : 'Chose Player'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Player;
