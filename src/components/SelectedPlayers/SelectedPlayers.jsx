import { toast } from 'react-toastify';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const SelectedPlayers = ({
	selectedPlayers,
	setSelectedPlayers,
	coin,
	setCoin,
}) => {
	const handleSelectedPlayer = (player) => {
		console.log(player);
		const newSelectedPlayers = selectedPlayers.filter(
			(selectedPlayer) => selectedPlayer.playerName != player.playerName,
		);
		setSelectedPlayers(newSelectedPlayers);
		setCoin(coin + player.price);
		toast.success(`${player.playerName} removed successfully.`);
	};

	return (
		<div className="space-y-4">
			{selectedPlayers.length === 0 ? (
				<div className="flex flex-col justify-center items-center">
					<h2 className="text-2xl">No players selected yet.</h2>
					<p>Go to Available tab to select players.</p>
				</div>
			) : (
				selectedPlayers.map((selectedPlayer, index) => (
					<SelectedPlayer
						key={index}
						selectedPlayer={selectedPlayer}
						handleSelectedPlayer={handleSelectedPlayer}
					></SelectedPlayer>
				))
			)}
		</div>
	);
};

export default SelectedPlayers;
