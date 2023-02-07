import { useState } from 'react';
//just a simple header
export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className='bg-blue-800 py-4 text-white font-semibold w-screen  shadow-2xl text-xl'>
			<div className='px-6 container flex justify-between'>
				<span>OPEN AI PLAYGROUND</span>
				<div
					className='cursor-pointer z-100 transition-colors select-none relative'
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<span className='hover:text-orange-400'>Change API</span>
				</div>
				<div
					className={`absolute bg-blue-800 overflow-hidden transition-all px-8 w-96 right-0 top-14 z-40 ${
						!isMenuOpen ? 'h-0' : 'h-full py-4 '
					}`}
				></div>
			</div>
		</div>
	);
};
