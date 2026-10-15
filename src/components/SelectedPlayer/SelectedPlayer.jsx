import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedPlayer = ({ selectedPlayer, handleSelectedPlayer }) => {
	console.log(selectedPlayer);
	const { playerImg, playerName, playerType } = selectedPlayer;

	return (
		<div className="flex justify-between items-center gap-4 p-5 rounded-2xl border">
			<div className="flex items-center gap-4">
				<img
					src={playerImg}
					alt={playerName}
					className="h-20 w-auto rounded-md"
				/>
				<div>
					<h2 className="flex items-center gap-2 font-semibold text-xl">
						<FaUser />
						{playerName}
					</h2>
					<p>{playerType}</p>
				</div>
			</div>
			<button
				onClick={() => handleSelectedPlayer(selectedPlayer)}
				className="btn text-red-500 text-3xl"
			>
				<MdDelete></MdDelete>
			</button>
		</div>
	);
};

export default SelectedPlayer;
