import { motion } from 'framer-motion'
import { FC } from 'react'
import project1 from '../assets/image/project1.png'
import project2 from '../assets/image/project2.png'
import project3 from '../assets/image/project3.png'

export const Projects: FC = () => {
	const projects = [
		{
			link: 'https://silly-peony-8410a7.netlify.app',
			image: project1,
			name: 'Video Hosting Layout'
		},
		{
			link: 'https://graceful-biscuit-03cc06.netlify.app/',
			image: project2,
			name: 'Online Shop'
		},
		{
			link: 'https://github.com/Oleh19/Oleh19-Portfolio-FullStack-Shop',
			image: project3,
			name: 'Shop (Firebase + React)'
		}
	]

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
				Projects
			</h3>

			<div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-red-500'>
				{projects.map((project, index) => (
					<a
						href={project.link}
						key={index}
						className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-7 md:p-44 h-screen '
					>
						<motion.img
							className=' w-auto max-h-[90%]'
							initial={{
								y: -300,
								opacity: 0
							}}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.2 }}
							viewport={{ once: true }}
							src={project.image}
							alt='project'
						/>

						<div className='space-y-10 px-0 md:px-10 max-w-6xl'>
							<h4 className='text-4xl font-semibold text-center'>
								<span className='underline decoration-red-500/50'>
									{project.name}
								</span>{' '}
								<br />
								<span className=' text-xl underline-none '>
									Click for more information
								</span>
							</h4>
						</div>
					</a>
				))}
			</div>

			<div className='w-full absolute top-[30%] bg-red-500/10 left-0 h-[500px] -skew-y-12 ' />
		</motion.div>
	)
}
