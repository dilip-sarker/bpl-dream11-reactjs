import Player from '../Player/Player';

const AvailablePlayers = ({
	players,
	setCoin,
	coin,
	selectedPlayers,
	setSelectedPlayers,
}) => {
	console.log(selectedPlayers);
	return (
		<div className="container-mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
			{players.map((player, index) => (
				<Player
					key={index}
					player={player}
					setCoin={setCoin}
					coin={coin}
					selectedPlayers={selectedPlayers}
					setSelectedPlayers={setSelectedPlayers}
				></Player>
			))}
		</div>
	);
};

export default AvailablePlayers;
