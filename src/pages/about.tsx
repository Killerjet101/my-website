import { motion } from "framer-motion";
import Image from 'next/image';
import Banner from '../../public/banner.jpg';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ ease: "easeOut", duration: 0.15 }}
			className="mt-24 w-full mb-32"
		>
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
					<h2 className='text-3xl font-bold'>
						Scouting
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
						ever since I was young...
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
