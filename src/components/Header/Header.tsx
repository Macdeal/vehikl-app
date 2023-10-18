import Logo from '../../assets/header/logo.svg?react';
import RightArrow from '../../assets/header/rightArrow.svg?react';

const Header = () => (
	<header className="bg-gray-900 fixed z-50 w-full border-b-2 border-gray-800">
		<div className="layout max-w-6xl">
			<nav className="flex items-center justify-around h-20 font-semibold text-white pl-2">
				<Logo className="h-10 mr-auto" />
				<div className="flex">
					<a className="text-gery-text uppercase p-2 tracking-wider text-sm mr-2 hover:text-brand" href="/">home</a>
					<a className="text-gery-text uppercase p-2 tracking-wider text-sm mr-2 hover:text-brand" href="/">how we work</a>
					<a className="text-gery-text uppercase p-2 tracking-wider text-sm mr-2 hover:text-brand" href="/">team</a>
					<a className="text-gery-text uppercase p-2 tracking-wider text-sm mr-2 hover:text-brand" href="/">we&apos;re hiring!</a>
					<button className="flex items-center uppercase" type="button">
						<span>contact</span>
						<RightArrow className="w-4" fill="white" />
					</button>
				</div>
			</nav>
		</div>
	</header>
);

export default Header;
