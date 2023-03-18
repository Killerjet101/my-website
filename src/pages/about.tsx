import { motion } from "framer-motion";
import Image from 'next/image';
import Banner from '../../public/banner.jpg';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import cup from '../../public/art/cup.jpg';
import balls from '../../public/art/balls.gif';
import donut from '../../public/art/Donut.png';
import image1 from '../../public/art/image1.jpg';
import image2 from '../../public/art/image2.jpg';
import image3 from '../../public/art/image3.jpg';

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
			<div className='mt-36 space-y-8'>
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
						fun with everyone there. I am currently youth equipment manager but I have
						been in all sorts of possitions like Patrol Leader, Assistant Patrol Leader,
						Den Cheif, and etc.
						<br></br>
						I am also part of Venturing Crew 9333. A Venture crew is the same as a Boy
						Scouts troop, but with a larger focus on high-adventure activities, first aid,
						and leadership training. It is only one of two co-ed scouting programs, and
						since Venturing crews are typically smaller, Venturers also do more personal
						events, like a game night or bowling.
					</p>

					<h2 className='text-3xl font-bold'>
						Music
					</h2>

					<p>
						I listen to a lot of Spotify and have always had a passion for music
						ever since I was young. I have experimented with digital music but the
						main thing I have really done is play in a middle school band for 3 years
						plus 3 years of Camarillo Music which is basically highschool synphonic/concert
						band on top of that. Last year however I moved more twoards digital music class
						to get more experiance in digital form of music instead.
					</p>

					<h2 className='text-3xl font-bold'>
						Art
					</h2>

					<p>
						With some of my friend's inspiration and encouragement, I am currently learning
						more about art. Some of the tools I am using are Blender for modeling,
						Photoshop, Krita for photo editing, and free-hand drawing in my spare time.
						With these tools, I'm able to immerse myself in photography and the
						fascinating world behind it. I have been surprised by how much I've
						discovered so far! To see some of my work simply look below at the images to
						see my current progress!
					</p>
					<div className='flex flex-row'>
					<div className='flex flex-col mr-5'>
						<Image
							alt='image3'
							src={image3}
							width={230}
							height={200}
							placeholder='blur'
							className='object-cover rounded-xl'
						/>
					</div>
					<div className='flex flex-col mr-5'>
						<Image
							alt='image1'
							src={image1}
							width={200}
							height={200}
							placeholder='blur'
							className='object-cover rounded-xl'
						/>
					</div>
					<div className='flex flex-col mr-5'>
						<Image
							alt='image2'
							src={image2}
							width={240}
							height={200}
							placeholder='blur'
							className='object-cover rounded-xl'
						/>
					</div>
				</div>
				<div className='flex flex-row'>
					<div className='flex flex-col mr-5'>
						<Image
							alt='cup'
							src={cup}
							width={220}
							height={200}
							placeholder='blur'
							className='object-cover rounded-xl'
						/>
					</div>
					<div className='flex flex-col mr-5'>
						<Image
							alt='balls'
							src={balls}
							width={210}
							height={200}
							className='object-cover rounded-xl'
						/>
					</div>
					<div className='flex flex-col mr-5'>
						<Image
							alt='donut'
							src={donut}
							width={240}
							height={200}
							placeholder='blur'
							className='object-cover rounded-xl'
						/>
					</div>
				</div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
