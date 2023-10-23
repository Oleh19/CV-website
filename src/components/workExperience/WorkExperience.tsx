import { motion } from 'framer-motion'
import { FC } from 'react'
import { ExperienceCard } from './ExperienceCard'
import {
	SiCss3,
	SiHtml5,
	SiReact,
	SiRedux,
	SiSass,
	SiTailwindcss,
	SiTypescript,
	SiNextdotjs,
	SiNuxtdotjs,
	SiVuedotjs
} from 'react-icons/si'

const experience = [
	{
		title: 'Middle Frontend Developer',
		employer: 'Loogol',
		icons: [
			SiCss3,
			SiHtml5,
			SiNextdotjs,
			SiReact,
			SiRedux,
			SiSass,
			SiTailwindcss,
			SiTypescript,
			SiNuxtdotjs
		],
		startWork: 12.2022,
		endWork: 'still working',
		responsibilites: [
			'Experience in refactoring legacy applications using GraphQL, performance optimization and development of new features,',
			'	Creating high-quality and scalable React.js for various company projects',
			'Participating in application architecture development, working with product managers, designers and other team members',
			'Mentoring and coaching junior developers, conducting technical discussions and code reviews'
		]
	},
	{
		title: 'Frontend Developer',
		employer: 'Freelance',
		icons: [
			SiCss3,
			SiHtml5,
			SiReact,
			SiRedux,
			SiSass,
			SiTailwindcss,
			SiTypescript,
			SiVuedotjs
		],
		startWork: 11.202,
		endWork: 12.2022,
		responsibilites: [
			'	The main developer who has worked on a wide range of projects, from landing pages to a factory`s CMS system.',
			'Has created several large projects from scratch. Participated in all stages of application development.',
			'Interacted directly with clients to determine precise acceptance criteria.'
		]
	}
]

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

			<div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-5 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-red-500'>
				{experience.map((job, index) => (
					<ExperienceCard key={index} {...job} />
				))}
			</div>
		</motion.div>
	)
}
