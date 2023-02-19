import { motion } from 'framer-motion'
import { FC } from 'react'
import { ExperienceCard } from './ExperienceCard'

export const WorkExperience: FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
		>
			<h3 className='absolute top-7 uppercase tracking-[20px] text-gray-500 text-2xl pl-[20px] xs:opacity-0 md:opacity-100 '>
				Experience
			</h3>

			<div className='w-full justify-center flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-5 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-red-500'>
				<ExperienceCard />
			</div>
		</motion.div>
	)
}
