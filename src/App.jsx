import { Suspense, useState } from 'react';
import './App.css';
import Banner from './components/Home/Banner/Banner';
import Navbar from './components/Home/Navbar/Navbar';
import Players from './components/Players/Players';
import { ToastContainer } from 'react-toastify';

const fetchPlayer = async () => {
	const res = await fetch('/data.json');
	return res.json();
};

function App() {
	const playersPromise = fetchPlayer();
	const [coin, setCoin] = useState(8000);
	return (
		<>
			<Navbar coin={coin}></Navbar>
			<Banner></Banner>
			<Suspense
				fallback={
					<div className="flex justify-center items-center">
						<span className="loading loading-dots loading-xl"></span>
					</div>
				}
			>
				<Players
					playersPromise={playersPromise}
					setCoin={setCoin}
					coin={coin}
				></Players>
			</Suspense>

			{/* react toastify container */}
			<ToastContainer></ToastContainer>
		</>
	);
}

export default App;
