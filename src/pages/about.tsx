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
import car1 from '../../public/pics/52-pic1.jpg';
import car2 from '../../public/pics/52-pic2.jpg';
import car3 from '../../public/pics/52-pic3.jpg';

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
					<h2 className='font-medium text-3xl mb-4'>Scouting ⚜️</h2>
					<p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-12">
						I am currently in Troop 858 and am a Life Scout. I enjoy all the
						fun activities we do especially camping and being outdoors. But it's only
						fun with everyone there. I am currently the youth equipment manager but I have
						been in all sorts of positions like Patrol Leader, Assistant Patrol Leader,
						Den Cheif, and etc.
						<br></br>
						I am also part of Venturing Crew 9333. A Venture crew is the same as a Boy
						Scouts troop, but with a larger focus on high-adventure activities, first aid,
						and leadership training. It is only one of two co-ed scouting programs, and
						since Venturing crews are typically smaller, Venturers also do more personal
						events, like a game night or bowling.
					</p>

					<h2 className='font-medium text-3xl mb-4'>Technologies 💻</h2>
					<p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-12">
						I'm passionate about everything technology; from designing and developing software, 
						to understand how the many moving parts of the internet work together, to 
						cybersecurity, systems, programming, and so much more. I strive to learn more about 
						these things every day, and utilize my knowledge to further understand <i>how</i> 
						or <i>why</i> the technology around us works.
					</p>

					<h2 className='font-medium text-3xl mb-4'>Cars 🚗</h2>
					<p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-12">
						My journey started in a senior-year high school auto tech class, leading to an 
						exhilarating internship at BMW that exposed me to cutting-edge automotive technology. 
						I proudly hold a G1 license in ASE, showcasing my dedication to excellence in the field. 
						Beyond my professional pursuits, I'm deeply engrossed in a personal passion project – 
						the restoration of a 1952 Ford F1. Currently stripped down to the frame, this classic 
						beauty serves as my canvas for automotive creativity. Follow me on this platform as I 
						share insights from both my professional experiences and the garage, where I'm 
						meticulously working on the intricacies of classic car mechanics.
					</p>
					<div className='flex flex-row'>
					<div className='flex flex-col mr-5'>
						<Image
							alt='car1'
							src={car1}
							width={230}
							height={200}
							placeholder='blur'
							className='object-cover rounded-xl'
						/>
					</div>
					<div className='flex flex-col mr-5'>
						<Image
							alt='car2'
							src={car2}
							width={200}
							height={200}
							placeholder='blur'
							className='object-cover rounded-xl'
						/>
					</div>
					<div className='flex flex-col mr-5'>
						<Image
							alt='car3'
							src={car3}
							width={240}
							height={200}
							placeholder='blur'
							className='object-cover rounded-xl'
						/>
					</div>
				</div>

					<h2 className='font-medium text-3xl mb-4'>Music 🎺🎵🎶</h2>
					<p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-12">
						I listen to a lot of Spotify and have had a passion for music since I was young. I 
						experimented with digital music for about a year, but the main thing I have done is 
						play Trumpet for a total of 6 years, including 3 years of Las Colinas Middle School 
						band and 3 years of Adolfo Camarillo High School band, also known as Camarillo Music, 
						which is a department of the school filled with different bands ranging from marching, 
						symphonic, concert, and mariachi. Last year, however, I switched to a digital music 
						class to gain more experience with digital music instead.
					</p>

					<h2 className='font-medium text-3xl mb-4'>Langauges 🗣️</h2>
					<p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-12">
						Native English speaker. Learning Spanish, Japanese, and German however.
					</p>

					<h2 className='font-medium text-3xl mb-4'>Art 🎨</h2>
					<p className="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-12">
						I'm currently learning more about art as well thanks to some of my friends' inspiration 
						and encouragement. Blender for modeling, Photoshop, Krita for photo editing, and 
						free-hand drawing are some of the tools I use to gain any experience I can. With these 
						tools, I can immerse myself in photography and the fascinating world that surrounds it. 
						I'm surprised at how much I've learned so far! Just look at the images below to see my 
						current progress!
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
