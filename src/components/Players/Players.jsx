import { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({ playersPromise, setCoin, coin }) => {
	const players = use(playersPromise);
	// console.log(players);
	const [selectedType, setSelectedType] = useState('available');
	const [selectedPlayers, setSelectedPlayers] = useState([]);
	return (
		<div className="container mx-auto">
			<div className="flex justify-between items-center my-4">
				<h2 className="font-bold text-2xl">
					{selectedType === 'available'
						? 'Available Players'
						: `Selected Players (${selectedPlayers.length}/${players.length})`}
				</h2>
				<div>
					<button
						onClick={() => setSelectedType('available')}
						className={`btn ${selectedType === 'available' ? 'bg-[#E7FE29]' : ''} rounded-r-none rounded-l-xl`}
					>
						Available
					</button>
					<button
						onClick={() => setSelectedType('selected')}
						className={`btn ${selectedType === 'selected' ? 'bg-[#E7FE29]' : ''} rounded-l-none rounded-r-xl`}
					>
						Selected ({selectedPlayers.length})
					</button>
				</div>
			</div>
			{selectedType === 'available' ? (
				<AvailablePlayers
					players={players}
					setCoin={setCoin}
					coin={coin}
					selectedPlayers={selectedPlayers}
					setSelectedPlayers={setSelectedPlayers}
				></AvailablePlayers>
			) : (
				<SelectedPlayers
					selectedPlayers={selectedPlayers}
					setSelectedPlayers={setSelectedPlayers}
					coin={coin}
					setCoin={setCoin}
				></SelectedPlayers>
			)}
		</div>
	);
};

export default Players;
