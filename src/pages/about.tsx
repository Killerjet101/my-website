import Image from 'next/image';
import Banner from '../../public/banner.jpg';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function AboutPage() {
	return (
		<div className='space-y-8'>
			<h1 className='block text-3xl font-bold sm:text-4xl md:text-6xl'>
				About
			</h1>
			<div className='text-gray-900/30 hover:text-gray-900 dark:text-white/20 dark:hover:text-white/100 transition-all'>
				<Image
					alt='Some friends and I in London'
					src={Banner}
					width={1000}
					height={400}
					placeholder='blur'
					className='block object-cover rounded-xl border-2 border-white'
				/>
				<span className='text-sm not-sr-only'>
					a trip to london with some friends
				</span>
			</div>

			<div className='space-y-8'>
				<p>
					Yo! I'm a full-stack engineer from the United States. I care about
					performant, accessible code. I'm a huge fan of making, reading and
					contributing to open source &amp; you can{' '}
					<a
						href='https://github.com/Killerjet101'
						rel='noreferrer'
						target='_blank'
					>
						sponsor me on GitHub
					</a>
					. Programming since seven, I've learned a lot about core programming
					principles, scaling, and systems architecture. I always love to joke
					around and I take my{' '}
					<a href='https://twitter.com/Killerjet101'>Twitter</a> presence very
					seriously...
				</p>
			</div>
		</div>
	);
}
