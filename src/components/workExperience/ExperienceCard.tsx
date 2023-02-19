import { motion } from 'framer-motion'
import { FC } from 'react'
import title from '../../assets/image/title.jpg'
import {
	SiCss3,
	SiHtml5,
	SiReact,
	SiRedux,
	SiSass,
	SiTailwindcss,
	SiTypescript
} from 'react-icons/si'

export const ExperienceCard: FC = () => {
	return (
		<article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
			<motion.img
				initial={{
					y: -100,
					opacity: 0
				}}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.2 }}
				viewport={{ once: true }}
				src={title}
				alt=''
				className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center '
			/>

			<div className='px-0 md:px-10'>
				<h4 className=' text-2xl md:text-4xl font-light'>
					Junior Frontend Developer
				</h4>
				<p className='font-bold text-2xl mt-1'>Company</p>
				<div className='flex space-x-2 my-2'>
					<SiRedux className='h-8 w-8 text-purple-700' />
					<SiReact className='h-8 w-8 text-blue-700' />
					<SiCss3 className='h-8 w-8 text-blue-500' />
					<SiHtml5 className='h-8 w-8 text-yellow-700' />
					<SiTypescript className='h-8 w-8 text-blue-500' />
					<SiSass className='h-8 w-8 text-red-700' />
					<SiTailwindcss className="h-8 w-8 text-blue-700" />
				</div>
				<p className='uppercase py-5 text-gray-300'>
					started work: 04.2022 - until now
				</p>

				<ul className='list-disc space-y-4 ml-5 text-lg'>
					<li>
						Summary pointsSummary pointsSummary pointsSummary pointsSummary
						points
					</li>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
				</ul>
			</div>
		</article>
	)
}
