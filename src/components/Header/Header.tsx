import RightArrow from '../../assets/header/rightArrow.svg?react';
import Logo from '../../assets/header/logo.svg?react';

const Header = () => (

	<header className="bg-gray-900">
		<div className="layout mx-auto px-4 max-w-6xl">
			<nav className="flex items-center h-20 font-semibold text-white uppercase">
				<Logo className="h-10" />
				<div className="flex">
					<a href="/">home</a>
					<a href="/">how we work</a>
					<a href="/">team</a>
					<a href="/">we&apos;re hiring!</a>
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
