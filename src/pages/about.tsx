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
					alt='Me and my troop at Lake Casitas'
					src={Banner}
					width={1000}
					height={400}
					placeholder='blur'
					className='block object-cover rounded-xl border-2 border-white'
				/>
				<span className='text-sm not-sr-only'>
					a trip to Lake Casitas with my Boy Scouts troop
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

				<h2 className='text-3xl font-bold'>
					Boy Scouts
				</h2>

				<p>
					I am currently in Troop-858 and am a Star Scout. I enjoy all the
					fun activities we do especially camping and being outdoors. But it's only
					fun with everyone there. I am the patrol leader of one of the patrols in
					the troop and...
				</p>

				<h2 className='text-3xl font-bold'>
					Music
				</h2>

				<p>
					I listen to a lot of Spotify and have always had a passion for music
					ever since I was young. Over the last 12 months, I've played the song
					exactly times! Below you can find an up-to-date collection of my favourite
					songs from the past ~4 weeks.
				</p>
			</div>
		</div>
	);
}
