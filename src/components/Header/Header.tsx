import Logo from '../../assets/header/logo.svg?react';
import RightArrow from '../../assets/header/rightArrow.svg?react';

const Header = () => (
	<header className="bg-gray-900">
		<div className="layout mx-auto px-4 max-w-6xl">
			<nav className="flex items-center h-20 font-semibold text-white">
				<Logo className="h-10 mr-auto" />
				<div className="flex">
					<a className="after:transition-all text-gery-text uppercase p-2 tracking-wider text-sm transition-all relative mr-2 last-of-type:mr-0 hover:text-brand" href="/">home</a>
					<a className="after:transition-all text-gery-text uppercase p-2 tracking-wider text-sm transition-all relative mr-2 last-of-type:mr-0 hover:text-brand" href="/">how we work</a>
					<a className="after:transition-all text-gery-text uppercase p-2 tracking-wider text-sm transition-all relative mr-2 last-of-type:mr-0 hover:text-brand" href="/">team</a>
					<a className="after:transition-all text-gery-text uppercase p-2 tracking-wider text-sm transition-all relative mr-2 last-of-type:mr-0 hover:text-brand" href="/">we&apos;re hiring!</a>
					<button
						className="flex items-center uppercase"
						type="button"
					>
						<span>contact</span>
						<RightArrow className="w-4" fill="white" />
					</button>
				</div>
			</nav>
		</div>
	</header>
);

export default Header;
