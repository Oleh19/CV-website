import { FC } from 'react'
import {
	SiCss3,
	SiHtml5,
	SiPhp,
	SiReact,
	SiRedux,
	SiSass,
	SiTailwindcss,
	SiTypescript
} from 'react-icons/si'
import {FaVuejs} from 'react-icons/fa'

export const ExperienceCard: FC = () => {
	return (
		<article className='inline-flex rounded-l items-center space-y-7 flex-shrink-0 xs:w-[350px]  sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] py-3 px-10 opacity-100 cursor-pointer transition-opacity duration-200 overflow-scroll '>
			<div className='px-0 md:px-10'>
				<h4 className=' text-2xl md:text-4xl font-bold'>
					Junior Frontend Developer
				</h4>
				<p className=' text-2xl mt-1'>Freelance</p>
				<div className='flex space-x-2 my-2'>
					<SiRedux className='h-8 w-8 text-purple-700' />
					<SiReact className='h-8 w-8 text-blue-700' />
					<SiCss3 className='h-8 w-8 text-blue-500' />
					<SiHtml5 className='h-8 w-8 text-yellow-700' />
					<SiTypescript className='h-8 w-8 text-blue-500' />
					<SiSass className='h-8 w-8 text-red-700' />
					<SiTailwindcss className='h-8 w-8 text-blue-700' />
					<SiPhp className='h-8 w-8 text-green-700' />
					<FaVuejs className='h-8 w-8 text-green-700' />
					
				</div>
				<p className='uppercase py-5 text-gray-300'>
					started work: 04.2022 - until now
				</p>

				<ul className='list-disc space-y-4 ml-5 text-lg'>
					<li>Adaptive layout for website</li>
					<li>Adaptive layout for mobile app (React Native)</li>
					<li>
						Was responsible for part of the business logic of the online store
					</li>
				</ul>
			</div>
		</article>
	)
}
