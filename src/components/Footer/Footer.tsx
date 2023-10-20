import Facebook from '../../assets/footer/facebook.svg?react'
import Instagram from '../../assets/footer/instagram.svg?react'
import LinkedIn from '../../assets/footer/linkedIn.svg?react'
import Logo from '../../assets/header/logo.svg?react';
import Podcast from '../../assets/footer/podcast.svg?react'
import Twitter from '../../assets/footer/twitter.svg?react'
import YouTube from '../../assets/footer/youtube.svg?react'
import EventTitle from '../eventTitle/EventTitle';
import FooterData from '../../dummydata/Footer';
import { EventVariation } from '../../data';

const Footer = () => {
	const iconStyle = 'w-6 h-6'
	const icons = [
		<Twitter className={iconStyle} />,
		<Instagram className={iconStyle} />,
		<Facebook className={iconStyle} />,
		<LinkedIn className={iconStyle} />,
		<YouTube className={iconStyle} />,
		<Podcast className={iconStyle} />
	]

	return (
		<>
			<section className='py-12 bg-gradient-to-tr from-gray-800/50 to-gray-900 border-t-2 border-gray-800'>
				<div className='layout mx-auto px-4 max-w-6xl text-center'>
					<div className='text-center max-w-[75ch] mx-auto mb-8'>
						<EventTitle text={FooterData.cardTitle} variation={EventVariation.Primary} />
						<p className='text-xl lg:text-2xl'>{FooterData.cardDescription}</p>
					</div>
					<button type='button'>
						{FooterData.btnText}
					</button>
				</div>
			</section>
			<footer className="bg-gray-900 p-4 py-12 mt-auto border-t-2 border-gray-800">
				<div className="flex flex-col items-center text-gray-400">
					<Logo className="mb-6 w-32 lg:w-48" />
					<div className='flex items-center mb-6'>
						{
							icons.map((icon: JSX.Element) =>
								<a className='p-2 lg:p-4 hover:text-gray-200 transition-all' href="/" >
									{icon}
								</a>
							)
						}
					</div>
					<span className='uppercase tracking-wider'>{FooterData.copyrightText}</span>
				</div>
			</footer>
		</>
	)
};

export default Footer;
