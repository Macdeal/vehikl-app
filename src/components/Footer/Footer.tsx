import { EventVariation } from '../../data';
import Facebook from '../../assets/footer/facebook.svg?react'
import FooterData from '../../dummydata/Footer';
import Instagram from '../../assets/footer/instagram.svg?react'
import LinkedIn from '../../assets/footer/linkedIn.svg?react'
import Logo from '../../assets/header/logo.svg?react';
import Podcast from '../../assets/footer/podcast.svg?react'
import Twitter from '../../assets/footer/twitter.svg?react'
import YouTube from '../../assets/footer/youtube.svg?react'
import EventTitle from '../eventTitle/EventTitle';

const Footer = () => (
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
					<a className='p-2 lg:p-4 hover:text-gray-200 transition-all' href="/" >
						<Twitter className='w-6 h-6' />
					</a>
					<a className='p-2 lg:p-4 hover:text-gray-200 transition-all' href="/" >
						<Instagram className='w-6 h-6' />
					</a>
					<a className='p-2 lg:p-4 hover:text-gray-200 transition-all' href="/" >
						<Facebook className='w-6 h-6' />
					</a>
					<a className='p-2 lg:p-4 hover:text-gray-200 transition-all' href="/" >
						<LinkedIn className='w-6 h-6' />
					</a>
					<a className='p-2 lg:p-4 hover:text-gray-200 transition-all' href="/" >
						<YouTube className='w-6 h-6' />
					</a>
					<a className='p-2 lg:p-4 hover:text-gray-200 transition-all' href="/" >
						<Podcast className='w-6 h-6' />
					</a>
				</div>
				<span className='uppercase tracking-wider'>{FooterData.copyrightText}</span>
			</div>
		</footer>
	</>
);

export default Footer;
