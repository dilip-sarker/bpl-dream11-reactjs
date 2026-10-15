import bannerImage from '../../../assets/banner-main.png';

// const Banner = () => {
// 	return (
// 		<div className="min-h-screen bg-liner-to-r from-purple-700 to-purple-500">
// 			<img src={bannerImage} alt="" />
// 		</div>
// 	);
// };

// export default Banner;

const Banner = ({ onClaimCredit }) => {
	return (
		<section className="relative isolate  my-6  container mx-auto min-h-80 overflow-hidden rounded-2xl bg-[#111111] px-5 py-10 text-center shadow-lg sm:min-h-87.5 sm:py-12">
			{/* Background glow effects */}
			<div className="pointer-events-none absolute -left-16 bottom-25 -z-10 h-64 w-64 rounded-full bg-indigo-500/70 blur-[90px]" />

			<div className="pointer-events-none absolute -right-10 -top-20 -z-10 h-64 w-64 rounded-full bg-rose-400/60 blur-[90px]" />

			<div className="pointer-events-none absolute bottom-27.5 left-1/3 -z-10 h-48 w-48 rounded-full bg-cyan-400/40 blur-[90px]" />

			{/* Banner content */}
			<div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
				<img
					src={bannerImage}
					alt="Cricket"
					className="mb-3 h-20 w-28 object-contain sm:h-24 sm:w-32"
				/>

				<h1 className="text-xl font-extrabold leading-tight text-white sm:text-2xl md:text-3xl">
					Assemble Your Ultimate Dream 11 Cricket Team
				</h1>

				<p className="mt-3 text-sm text-gray-300 sm:text-base">
					Beyond Boundaries Beyond Limits
				</p>

				<button
					type="button"
					onClick={onClaimCredit}
					className="mt-6 rounded-xl border border-lime-400/60 bg-lime-400 px-5 py-2.5 text-sm font-bold text-black shadow-[0_0_18px_rgba(163,230,53,0.35)] transition duration-200 hover:scale-105 hover:bg-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-[#111111]"
				>
					Claim Free Credit
				</button>
			</div>
		</section>
	);
};

export default Banner;
